import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCTz8M9UoCMYvOVetiWAsaUTm_KYT2FKHU",
    authDomain: "lush-website-2026.firebaseapp.com",
    projectId: "lush-website-2026",
    storageBucket: "lush-website-2026.firebasestorage.app",
    messagingSenderId: "298238395206",
    appId: "1:298238395206:web:84fb13b74d75cc2fce9b47"
};

const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);

async function run() {
    try {
        await signInAnonymously(auth);
        console.log("Logged in anonymously.");
        console.log("Fetching leads...");
        const leadsRef = collection(db, 'artifacts', 'lush-website-2026', 'public', 'data', 'leads');
        const q = query(leadsRef, where('isWaitlist', '==', true));
        const snapshot = await getDocs(q);
        console.log("Success! Found", snapshot.size, "documents");
        process.exit(0);
    } catch (e) {
        console.error("Error connecting to Firebase:", e);
        process.exit(1);
    }
}

run();
