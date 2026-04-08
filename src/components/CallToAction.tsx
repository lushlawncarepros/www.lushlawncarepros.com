"use client";

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import React, { useState, useRef, useEffect, Suspense } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { collection, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import imageCompression from 'browser-image-compression';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getLushAuth, getLushDb, getLushStorage, appId } from '@/lib/firebase';

import { SieveStep } from './cta/SieveStep';
import { LeadForm } from './cta/LeadForm';
import { SuccessScreen } from './cta/SuccessScreen';

const CallToActionContent = ({ redirectOnQuote = false, isPrimary = false, hideServices = false, buttonText = "Get Free Quote", variant = 'primary', skipSieve = false, forceForm = false, sourceOverride }: { redirectOnQuote?: boolean, isPrimary?: boolean, hideServices?: boolean, buttonText?: string, variant?: 'primary' | 'subtle', skipSieve?: boolean, forceForm?: boolean, sourceOverride?: string }) => {
    const [loading, setLoading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [step, setStep] = useState(forceForm ? 4 : 0);
    const [isWaitlist, setIsWaitlist] = useState(false);

    const [showAvailability, setShowAvailability] = useState(false);
    const [showBiWeeklyNotice, setShowBiWeeklyNotice] = useState(false);
    const [showBudgetExit, setShowBudgetExit] = useState(false);

    // Address Breakdown
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [lat, setLat] = useState<number | null>(null);
    const [lng, setLng] = useState<number | null>(null);

    // Contact info & Validation
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    // Multi-file
    const [files, setFiles] = useState<File[]>([]);
    const [fileUrlsPreview, setFileUrlsPreview] = useState<{ file: File, url: string }[]>([]);

    // Additional Services
    const [showServices, setShowServices] = useState(false);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [showServicesGrid, setShowServicesGrid] = useState(false);

    const [error, setError] = useState("");
    const successRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const servicesGridRef = useRef<HTMLDivElement | null>(null);
    const streetInputRef = useRef<HTMLInputElement | null>(null);

    const autocompleteInitedRef = useRef(false);
    const placeSelectedRef = useRef(false);
    const placesAttribDivRef = useRef<HTMLDivElement | null>(null);
    const geocodeDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [isMapsLoaded, setIsMapsLoaded] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const isQuoteHash = typeof window !== 'undefined' && window.location.hash === '#quote';

        if (forceForm) {
            setStep(4);
        } else if (isPrimary && (searchParams?.get('quote') === 'true' || isQuoteHash)) {
            setStep(1);
            // Remove the query parameter or hash from the URL so it doesn't trigger again on a fresh reload
            router.replace(pathname || '/', { scroll: false });
        } else if (skipSieve && searchParams?.get('form') === 'services') {
            setStep(4);
            router.replace(pathname || '/', { scroll: false });
        }
    }, [searchParams, isPrimary, pathname, router, skipSieve, forceForm]);

    useEffect(() => {
        if (!pathname) return;
        let serviceToAdd = null;
        if (pathname.includes('/aeration')) serviceToAdd = "Fall Aeration & Overseeding";
        else if (pathname.includes('/fertilization')) serviceToAdd = "Lawn Fertilization & Weed Control";
        else if (pathname.includes('/weed-control')) serviceToAdd = "Bed & Hardscape Weed Control";
        else if (pathname.includes('/sprinkler-blowout')) serviceToAdd = "Sprinkler Turn-On / Blowout";
        else if (pathname.includes('/shrub-care')) serviceToAdd = "Shrub Pruning";

        if (serviceToAdd) {
            setSelectedServices(prev => prev.includes(serviceToAdd) ? prev : [...prev, serviceToAdd]);
        }
    }, [pathname]);

    useEffect(() => {
        (window as any).gm_authFailure = () => {
            console.warn('LUSH: Google Maps auth failure suppressed.');
        };

        const div = document.createElement('div');
        div.setAttribute('aria-hidden', 'true');
        div.style.cssText = 'position:fixed; top:-10px; left:-10px; width:1px; height:1px; opacity:0; pointer-events:none;';
        document.body.appendChild(div);
        placesAttribDivRef.current = div;

        return () => {
            delete (window as any).gm_authFailure;
            if (div.parentNode) div.parentNode.removeChild(div);
            placesAttribDivRef.current = null;
            if (geocodeDebounceRef.current) clearTimeout(geocodeDebounceRef.current);
        };
    }, []);

    const initAutocomplete = () => {
        if (autocompleteInitedRef.current) return;
        if (!streetInputRef.current) return;
        if (!(window as any).google?.maps?.places) return;

        try {
            autocompleteInitedRef.current = true;
            const autocomplete = new (window as any).google.maps.places.Autocomplete(streetInputRef.current, {
                componentRestrictions: { country: "us" },
                fields: ["address_components", "geometry", "formatted_address"],
                types: ["address"],
            });

            autocomplete.addListener("place_changed", () => {
                const place = autocomplete.getPlace();
                if (!place.address_components) return;

                let streetNumber = "";
                let route = "";
                let c = "";
                let z = "";
                place.address_components.forEach((comp: any) => {
                    const types = comp.types;
                    if (types.includes("street_number")) streetNumber = comp.short_name;
                    if (types.includes("route")) route = comp.short_name;
                    if (types.includes("locality")) c = comp.long_name;
                    if (types.includes("postal_code")) z = comp.short_name;
                });

                const streetLine = `${streetNumber} ${route}`.trim();
                setStreet(streetLine);
                setCity(c);
                setZip(z);

                if (streetInputRef.current) {
                    streetInputRef.current.value = streetLine;
                }

                placeSelectedRef.current = true;

                if (place.geometry?.location) {
                    setLat(place.geometry.location.lat());
                    setLng(place.geometry.location.lng());
                } else {
                    setLat(null);
                    setLng(null);
                }
            });
        } catch (err) {
            console.warn('LUSH: Autocomplete init failed silently.', err);
            autocompleteInitedRef.current = false;
            setError('Please select a suggested address to continue.');
        }
    };

    useEffect(() => {
        if (step !== 1) {
            autocompleteInitedRef.current = false;
            return;
        }
        if ((window as any).google?.maps?.places) {
            initAutocomplete();
            return;
        }
        if (isMapsLoaded) {
            initAutocomplete();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step, isMapsLoaded]);

    useEffect(() => {
        if (showServicesGrid && servicesGridRef.current) {
            setTimeout(() => {
                servicesGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 50);
        }
    }, [showServicesGrid]);

    useEffect(() => {
        if (step === 5 && successRef.current) {
            successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (step === 4 && containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (step > 0 && containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        if (step > 0) {
            document.body.classList.add('gatekeeper-open');
        } else {
            document.body.classList.remove('gatekeeper-open');
        }

        return () => {
            document.body.classList.remove('gatekeeper-open');
        };
    }, [step]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            const newPreviews = newFiles.map(file => ({
                file,
                url: URL.createObjectURL(file)
            }));
            setFiles(prev => [...prev, ...newFiles]);
            setFileUrlsPreview(prev => [...prev, ...newPreviews]);
        }
    };

    const removeFile = (fileToRemove: File) => {
        setFiles(prev => prev.filter(f => f !== fileToRemove));
        setFileUrlsPreview(prev => prev.filter(f => f.file !== fileToRemove));
    };

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, '');
        if (input.length > 10) input = input.substring(0, 10);
        let formatted = input;
        if (input.length > 6) {
            formatted = `(${input.substring(0, 3)}) ${input.substring(3, 6)}-${input.substring(6)}`;
        } else if (input.length > 3) {
            formatted = `(${input.substring(0, 3)}) ${input.substring(3)}`;
        }
        setPhone(formatted);
        if (phoneError) setPhoneError("");
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (emailError) setEmailError("");
    };

    const isInsideLushBox = (latVal: number, lngVal: number): boolean => {
        return latVal < 43.661 && latVal > 43.550 && lngVal > -116.354 && lngVal < -116.201;
    };

    const routeByCoords = (latVal: number, lngVal: number) => {
        if (isInsideLushBox(latVal, lngVal)) {
            setIsWaitlist(false);
            setStep(2);
        } else {
            setIsWaitlist(true);
            setStep(4);
        }
    };

    const checkBoundary = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const rawAddress = streetInputRef.current?.value?.trim() || street.trim();
        const trimmedCity = city.trim();
        const trimmedZip = zip.trim();

        if (!/^\d{5}$/.test(trimmedZip)) {
            setError('Please enter a valid 5-digit zip code.');
            return;
        }

        if (!/^[A-Za-z\s\-']+$/.test(trimmedCity)) {
            setError('City must contain letters only — no numbers or special characters.');
            return;
        }

        if (!/\d/.test(rawAddress) || !/[A-Za-z]/.test(rawAddress)) {
            setError('Please enter a valid street address (e.g. 1234 W Main St).');
            return;
        }

        const addressForGeocode = `${rawAddress}, ${trimmedCity}, ${trimmedZip}`;

        if (lat !== null && lng !== null && placeSelectedRef.current) {
            setStreet(rawAddress);
            routeByCoords(lat, lng);
            return;
        }

        if (!(window as any).google?.maps?.places) {
            setError('Address lookup is still loading — please wait a moment and try again.');
            return;
        }

        if (geocodeDebounceRef.current) clearTimeout(geocodeDebounceRef.current);

        setLoading(true);

        geocodeDebounceRef.current = setTimeout(() => {
            try {
                const autocompleteService = new (window as any).google.maps.places.AutocompleteService();
                autocompleteService.getPlacePredictions(
                    { input: addressForGeocode, componentRestrictions: { country: 'US' }, types: ['address'] },
                    (predictions: any[], predStatus: string) => {
                        if (predStatus !== 'OK' || !predictions?.length) {
                            setLoading(false);
                            setError('Address not recognized. Please select a valid street address from the suggestions.');
                            return;
                        }

                        const attribDiv = placesAttribDivRef.current;
                        if (!attribDiv) {
                            setLoading(false);
                            setError('Address not recognized. Please select a valid street address from the suggestions.');
                            return;
                        }

                        const placesService = new (window as any).google.maps.places.PlacesService(attribDiv);
                        placesService.getDetails(
                            { placeId: predictions[0].place_id, fields: ['geometry'] },
                            (place: any, detailStatus: string) => {
                                setLoading(false);
                                if (detailStatus === 'OK' && place?.geometry?.location) {
                                    const gLat = place.geometry.location.lat();
                                    const gLng = place.geometry.location.lng();
                                    setLat(gLat);
                                    setLng(gLng);
                                    setStreet(rawAddress);
                                    routeByCoords(gLat, gLng);
                                } else {
                                    setError('Address not recognized. Please select a valid street address from the suggestions.');
                                }
                            }
                        );
                    }
                );
            } catch (err) {
                console.warn('LUSH: Geocode fallback failed silently.', err);
                setLoading(false);
                setError('Address not recognized. Please select a valid street address from the suggestions.');
            }
        }, 350);
    };

    const handleFrequency = (isWeekly: boolean) => {
        if (isWeekly) {
            setStep(3);
        } else {
            setShowBiWeeklyNotice(true);
        }
    };

    const handleBudget = (accept: boolean) => {
        if (accept) {
            setStep(4);
        } else {
            setShowBudgetExit(true);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setEmailError("");
        setPhoneError("");

        const formElement = e.currentTarget;
        const honeypot = (formElement.elements.namedItem('website_url') as HTMLInputElement | null)?.value;
        if (honeypot) {
            setStep(5);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a complete email address.");
            return;
        }

        if (!isWaitlist) {
            const digitCount = phone.replace(/\D/g, '').length;
            if (digitCount !== 10) {
                setPhoneError("Phone number must be exactly 10 digits.");
                return;
            }
        }

        // Address safety net — block submissions with empty address unless it's a tagged compliance submission
        if (!sourceOverride) {
            if (!street.trim() || !city.trim() || !zip.trim()) {
                setError("Property address is required. Please provide your complete address to continue.");
                return;
            }
        }

        const auth = getLushAuth();
        const storage = getLushStorage();
        const db = getLushDb();
        if (!auth || !db || !storage) return;

        setLoading(true);

        try {
            let user = auth.currentUser;
            if (!user) {
                const cred = await signInAnonymously(auth);
                user = cred.user;
            }

            const photoUrls: string[] = [];

            if (files.length > 0 && !isWaitlist) {
                let totalBytes = 0;
                const processedFiles: File[] = [];

                for (const file of files) {
                    if (file.type.startsWith('image/')) {
                        try {
                            const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true };
                            const compressedFile = await imageCompression(file, options);
                            processedFiles.push(compressedFile);
                            totalBytes += compressedFile.size;
                        } catch (e) {
                            processedFiles.push(file);
                            totalBytes += file.size;
                        }
                    } else {
                        processedFiles.push(file);
                        totalBytes += file.size;
                    }
                }

                let uploadedBytes = 0;
                const uploadPromises = processedFiles.map(async (file) => {
                    const timestamp = Date.now();
                    const fileRef = ref(storage, `artifacts/${appId}/public/data/leads/${timestamp}_${file.name}`);

                    const uploadTask = uploadBytesResumable(fileRef, file);

                    const snapshot = await new Promise<any>((resolve, reject) => {
                        let fileUploadedBytes = 0;
                        uploadTask.on('state_changed',
                            (snapshot) => {
                                const delta = snapshot.bytesTransferred - fileUploadedBytes;
                                uploadedBytes += delta;
                                fileUploadedBytes = snapshot.bytesTransferred;

                                const progress = (uploadedBytes / totalBytes) * 100;
                                setUploadProgress(Math.round(progress));
                            },
                            (error) => reject(error),
                            () => resolve(uploadTask.snapshot)
                        );
                    });

                    return await getDownloadURL(snapshot.ref);
                });

                try {
                    const urls = await Promise.all(uploadPromises);
                    photoUrls.push(...urls);
                } catch (e: any) {
                    throw new Error('Satellite link interrupted. Please check your connection and click Submit Quote again.');
                }
            }

            const emailPhotoLinks = photoUrls.map((url, index) => {
                const file = files[index];
                if (file && file.type.startsWith('video/')) {
                    return `<a href="${url}" style="display:inline-block; padding:12px 20px; background:#111; color:var(--color-lush-emerald); text-decoration:none; border:2px solid var(--color-lush-emerald); border-radius:8px; font-weight:bold; font-size:13px;">▶ VIEW VIDEO AUDIT</a>`;
                }
                return `<a href="${url}" target="_blank"><img src="${url}" alt="Audit Photo" style="width:160px; height:110px; object-fit:cover; border-radius:8px; border:2px solid var(--color-lush-emerald); margin-right:8px;" /></a>`;
            }).join('');

            const formData = new FormData(formElement);
            const data = Object.fromEntries(formData.entries());
            const fullAddress = `${street}, ${city}, ${zip}`;

            const leadsRef = collection(db, 'artifacts', appId, 'public', 'data', 'leads');
            const newLeadRef = await addDoc(leadsRef, {
                ...data,
                address: fullAddress,
                street,
                city,
                zip,
                isWaitlist,
                userId: user.uid,
                photoUrls,
                emailPhotoLinks: photoUrls.map((url, index) => `${index + 1}. ${url}`).join('\n'),
                additionalServices: selectedServices,
                createdAt: serverTimestamp(),
                systemVersion: 'v18_fasttrack_compressed',
                ...(sourceOverride ? { submissionSource: sourceOverride } : {})
            });

            setStep(5);

            const buildSection = (title: string, fields: { label: string, value: any }[]) => {
                const validFields = fields.filter(f => f.value && typeof f.value === 'string' && f.value !== '' && f.value !== 'None' && f.value !== 'N/A' && f.value !== "I Don't Know");
                if (validFields.length === 0) return '';
                let html = `<h4 style="color:var(--color-lush-emerald); margin-bottom:5px; border-bottom:1px solid #eee; text-transform:uppercase; font-size:12px;">${title}</h4>`;
                validFields.forEach(f => {
                    html += `<p style="margin:2px 0; font-size:14px;"><b>${f.label}:</b> ${f.value}</p>`;
                });
                return html;
            };

            let dynamicEmailContent = '';

            dynamicEmailContent += buildSection('IDENTITY', [
                { label: 'First Name', value: data.firstName as string | undefined },
                { label: 'Last Name', value: data.lastName as string | undefined },
                { label: 'Email', value: data.email as string | undefined },
                { label: 'Phone', value: data.phone as string | undefined },
                { label: 'Source', value: data.source as string | undefined }
            ]);

            dynamicEmailContent += buildSection('PROPERTY', [
                { label: 'Out of Bounds (Waitlist)', value: isWaitlist ? 'Yes' : 'No' },
                { label: 'Property Address', value: fullAddress }
            ]);

            dynamicEmailContent += buildSection('SERVICE SPECS', [
                { label: 'Additional Services', value: selectedServices.length > 0 ? `<ul>${selectedServices.map(s => `<li>${s}</li>`).join('')}</ul>` : '' },
                { label: 'Comments', value: data.comments as string | undefined }
            ]);

            dynamicEmailContent += buildSection('SPRINKLERS', [
                { label: 'Estimate Type', value: data.sprinkler_estimate_type as string | undefined },
                { label: 'Water Source', value: data.sprinkler_water_source as string | undefined },
                { label: 'Total Zones', value: data.sprinkler_zones as string | undefined },
                { label: 'Spickets to Blowout', value: data.sprinkler_spickets as string | undefined },
                { label: 'Backflow Location', value: data.sprinkler_backflow_location as string | undefined },
                { label: 'Valve Location', value: data.sprinkler_valve_location as string | undefined },
                { label: 'Add to Yearly Schedule', value: data.sprinkler_yearly_schedule as string | undefined },
                { label: 'Sprinkler Comments', value: data.sprinkler_comments as string | undefined }
            ]);

            const templateParams = {
                firstName: (data.firstName as string) || '',
                lastName: (data.lastName as string) || '',
                email: (data.email as string) || '',
                dynamicEmailContent: dynamicEmailContent || '<p>No specific details provided.</p>',
                emailPhotoLinks: emailPhotoLinks || '<p style="color:#999;font-size:12px;">No visual audit files attached.</p>'
            };

            emailjs.send(
                'service_ei3a7zf',
                'template_bfyeh37',
                templateParams,
                'x9-y1ftDE0IHyKVJl'
            ).catch(emailErr => {
                console.error("LUSH_BACKGROUND_EMAIL_ERROR:", emailErr);
            });

        } catch (err: any) {
            console.error("Lush Connection Error:", err);
            setError(err.message || 'Satellite link interrupted. Please check your connection and click Confirm again.');
        } finally {
            setLoading(false);
            setUploadProgress(0);
        }
    };

    if (step === 5) {
        return <SuccessScreen isWaitlist={isWaitlist} successRef={successRef} error={error} />;
    }

    const additionalServicesList = [
        "Lawn Fertilization & Weed Control",
        "Bed & Hardscape Weed Control",
        "Sprinkler Turn-On / Blowout",
        "Fall Aeration & Overseeding",
        "Shrub Pruning"
    ];

    return (
        <div ref={containerRef}>
            <Script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCokEh8LbiDxX2KvxmY0cY9LQJ-eJpUKgU&libraries=places&loading=async"
                strategy="afterInteractive"
                onLoad={() => {
                    setIsMapsLoaded(true);
                    initAutocomplete();
                }}
            />
            {step === 0 && (
                <div className="flex flex-col items-center gap-6 w-full">
                    <button
                        onClick={() => {
                            if (redirectOnQuote) {
                                router.push('/?quote=true');
                            } else if (skipSieve) {
                                setStep(4);
                            } else {
                                setStep(1);
                            }
                        }}
                        className={variant === 'subtle'
                            ? "inline-flex items-center gap-2 bg-transparent border-2 border-[#39B54A] text-[#39B54A] px-10 py-5 rounded-full font-bold hover:bg-[#39B54A] hover:text-[#111111] transition-all duration-300 text-lg md:text-xl uppercase tracking-wider shadow-[0_0_15px_rgba(57,181,74,0.2)] hover:shadow-[0_0_20px_rgba(57,181,74,0.4)]"
                            : "bg-[radial-gradient(ellipse_at_center,_#33FF00_0%,_var(--color-lush-emerald)_100%)] px-10 py-5 rounded-full font-extrabold text-lush-slate hover:scale-105 hover:bg-[radial-gradient(ellipse_at_center,_#2ce000_0%,_#32a042_100%)] transition-all shadow-[0_0_25px_rgba(51,255,0,0.5)] border-[1.4px] border-[#006600] text-xl md:text-2xl"
                        }
                    >
                        {buttonText}
                    </button>

                    {!hideServices && (
                        <>
                            <button
                                onClick={() => setShowServicesGrid(!showServicesGrid)}
                                className="flex items-center gap-2 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-emerald-500/50 px-6 py-2.5 rounded-full transition-all text-sm font-medium shadow-sm"
                            >
                                {showServicesGrid ? "Hide Services" : "View Services"}
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${showServicesGrid ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>

                            {showServicesGrid && (
                                <div ref={servicesGridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 w-full max-w-4xl animate-in fade-in slide-in-from-top-4 duration-300">
                                    <Link href="/services/mowing" className="bg-gray-800/50 border border-gray-700 hover:border-lush-emerald/50 p-4 rounded-xl transition-colors text-center flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-lg hover:shadow-lush-emerald/20">
                                        <span className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                                            <Image src="/icons/Mower Icon.png?v=7" alt="Weekly Mowing" width={96} height={96} className="w-full h-full object-contain" unoptimized />
                                        </span>
                                        <span className="font-bold text-sm text-gray-200">Weekly Mowing</span>
                                    </Link>

                                    <Link href="/services/fertilization" className="bg-gray-800/50 border border-gray-700 hover:border-lush-emerald/50 p-4 rounded-xl transition-colors text-center flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-lg hover:shadow-lush-emerald/20">
                                        <span className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                                            <Image src="/icons/Fertilizer Icon.png?v=7" alt="Fertilization" width={96} height={96} className="w-full h-full object-contain" unoptimized />
                                        </span>
                                        <span className="font-bold text-sm text-gray-200">Fertilization</span>
                                    </Link>

                                    <Link href="/services/weed-control" className="bg-gray-800/50 border border-gray-700 hover:border-lush-emerald/50 p-4 rounded-xl transition-colors text-center flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-lg hover:shadow-lush-emerald/20">
                                        <span className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                                            <Image src="/icons/Weed Control.png?v=7" alt="Weed Control" width={96} height={96} className="w-full h-full object-contain" unoptimized />
                                        </span>
                                        <span className="font-bold text-sm text-gray-200">Weed Control</span>
                                    </Link>

                                    <Link href="/services/seasonal" className="bg-gray-800/50 border border-gray-700 hover:border-lush-emerald/50 p-4 rounded-xl transition-colors text-center flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-lg hover:shadow-lush-emerald/20">
                                        <span className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                                            <Image src="/icons/Seasonal Sprinkler Icon.png?v=7" alt="Seasonal Services" width={96} height={96} className="w-full h-full object-contain" unoptimized />
                                        </span>
                                        <span className="font-bold text-sm text-gray-200">Seasonal Services</span>
                                    </Link>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}

            {(step === 1 || step === 2 || step === 3) && (
                <SieveStep
                    step={step} setStep={setStep}
                    showBiWeeklyNotice={showBiWeeklyNotice} setShowBiWeeklyNotice={setShowBiWeeklyNotice}
                    showBudgetExit={showBudgetExit} setShowBudgetExit={setShowBudgetExit}
                    handleFrequency={handleFrequency} handleBudget={handleBudget}
                    checkBoundary={checkBoundary} streetInputRef={streetInputRef}
                    street={street} city={city} setCity={setCity} zip={zip} setZip={setZip}
                    error={error} loading={loading} setLat={setLat} setLng={setLng} placeSelectedRef={placeSelectedRef}
                />
            )}

            {step === 4 && (
                <LeadForm
                    isWaitlist={isWaitlist} handleSubmit={handleSubmit} loading={loading} error={error}
                    email={email} handleEmailChange={handleEmailChange} emailError={emailError}
                    phone={phone} handlePhoneChange={handlePhoneChange} phoneError={phoneError}
                    setStep={setStep} selectedServices={selectedServices} toggleService={toggleService}
                    additionalServicesList={additionalServicesList} handleFileChange={handleFileChange}
                    fileUrlsPreview={fileUrlsPreview} removeFile={removeFile} uploadProgress={uploadProgress}
                    files={files}
                    showAddressFields={skipSieve}
                    street={street} setStreet={setStreet}
                    city={city} setCity={setCity}
                    zip={zip} setZip={setZip}
                />
            )}
        </div >
    );
};

export const CallToAction = (props: { redirectOnQuote?: boolean, isPrimary?: boolean, hideServices?: boolean, buttonText?: string, variant?: 'primary' | 'subtle', skipSieve?: boolean, forceForm?: boolean, sourceOverride?: string }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CallToActionContent {...props} />
        </Suspense>
    );
};
