import re

with open('c:/DevProjects/Lush-Website-2026/src/components/CallToAction.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Imports
content = content.replace(
    "import { collection, addDoc, serverTimestamp } from 'firebase/firestore';",
    "import { collection, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';\nimport imageCompression from 'browser-image-compression';"
)

# 2. SuccessScreen invocation
content = content.replace(
    "<SuccessScreen isWaitlist={isWaitlist} successRef={successRef} />",
    "<SuccessScreen isWaitlist={isWaitlist} successRef={successRef} uploadProgress={uploadProgress} filesCount={files.length} error={error} />"
)

# 3. handleSubmit logic
# We'll isolate the part between `const photoUrls: string[] = [];` and the final `catch (err: any) {` 

old_logic = """            const photoUrls: string[] = [];

            if (files.length > 0 && !isWaitlist) {
                let totalBytes = files.reduce((acc, f) => acc + f.size, 0);
                let uploadedBytes = 0;

                const uploadPromises = files.map(async (file) => {
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

            // Step A: Firebase Storage Uploads are already awaited above

            // Step B: Write to Firestore
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
                emailPhotoLinks: photoUrls.map((url, index) => `${index + 1}. ${url}`).join('\\n'),
                additionalServices: selectedServices,
                createdAt: serverTimestamp(),
                systemVersion: 'v16_fasttrack_final'
            });

            // Step C: Trigger Success Screen IMMEDIATELY
            setStep(5);

            // Step D: Send Email Notification in the Background (No await)
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
                { label: 'Street', value: street },
                { label: 'City', value: city },
                { label: 'Zip', value: zip },
                { label: 'Out of Bounds (Waitlist)', value: isWaitlist ? 'Yes' : 'No' }
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
                dynamicEmailContent: dynamicEmailContent || '<p>No specific details provided.</p>',
                emailPhotoLinks: emailPhotoLinks || '<p style="color:#999;font-size:12px;">No visual audit files attached.</p>'
            };

            // Non-blocking fire-and-forget
            emailjs.send(
                'service_ei3a7zf',
                'template_bfyeh37',
                templateParams,
                'x9-y1ftDE0IHyKVJl'
            ).catch(emailErr => {
                console.error("LUSH_BACKGROUND_EMAIL_ERROR:", emailErr);
            });"""

new_logic = """            const formData = new FormData(formElement);
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
                photoUrls: [],
                emailPhotoLinks: '',
                additionalServices: selectedServices,
                createdAt: serverTimestamp(),
                systemVersion: 'v17_fasttrack_background'
            });

            setStep(5);
            setLoading(false);

            const runBackgroundUploads = async () => {
                const photoUrls: string[] = [];
                if (files.length > 0 && !isWaitlist) {
                    try {
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

                        const urls = await Promise.all(uploadPromises);
                        photoUrls.push(...urls);
                        setUploadProgress(100);

                        const emailPhotoLinks = photoUrls.map((url, index) => {
                            const file = files[index];
                            if (file && file.type.startsWith('video/')) {
                                return `<a href="${url}" style="display:inline-block; padding:12px 20px; background:#111; color:var(--color-lush-emerald); text-decoration:none; border:2px solid var(--color-lush-emerald); border-radius:8px; font-weight:bold; font-size:13px;">▶ VIEW VIDEO AUDIT</a>`;
                            }
                            return `<a href="${url}" target="_blank"><img src="${url}" alt="Audit Photo" style="width:160px; height:110px; object-fit:cover; border-radius:8px; border:2px solid var(--color-lush-emerald); margin-right:8px;" /></a>`;
                        }).join('');

                        await updateDoc(newLeadRef, {
                            photoUrls,
                            emailPhotoLinks: photoUrls.map((url, index) => `${index + 1}. ${url}`).join('\\n')
                        });

                        sendEmail(emailPhotoLinks);
                    } catch (e: any) {
                        console.error('Satellite link interrupted during background upload.', e);
                        setError('Satellite visual audit link interrupted. Your quote is secured, but photos may be missing.');
                    }
                } else {
                    sendEmail('');
                }
            };

            const sendEmail = (emailPhotoLinks: string) => {
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
                    { label: 'Street', value: street },
                    { label: 'City', value: city },
                    { label: 'Zip', value: zip },
                    { label: 'Out of Bounds (Waitlist)', value: isWaitlist ? 'Yes' : 'No' }
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
            };

            runBackgroundUploads();"""

content = content.replace(old_logic, new_logic)

# Replace the catch block to remove finally loading=false since it's already set up
old_catch = """        } catch (err: any) {
            console.error("Lush Connection Error:", err);
            setError(err.message || 'Satellite link interrupted. Please check your connection and click Confirm again.');
        } finally {
            setLoading(false);
            setUploadProgress(0);
        }
    };"""

new_catch = """        } catch (err: any) {
            console.error("Lush Connection Error:", err);
            setError(err.message || 'Satellite link interrupted. Please check your connection and click Confirm again.');
            setLoading(false);
            setUploadProgress(0);
        }
    };"""

content = content.replace(old_catch, new_catch)

with open('c:/DevProjects/Lush-Website-2026/src/components/CallToAction.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated CallToAction.tsx")
