import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
    apiKey: "AIzaSyCTz8M9UoCMYvOVetiWAsaUTm_KYT2FKHU",
    authDomain: "lush-website-2026.firebaseapp.com",
    projectId: "lush-website-2026",
    storageBucket: "lush-website-2026.firebasestorage.app",
    messagingSenderId: "298238395206",
    appId: "1:298238395206:web:84fb13b74d75cc2fce9b47"
};

const app = getApps().length > 0 ? getApp() : initializeApp(config);

export const getLushAuth = () => getAuth(app);
export const getLushDb = () => getFirestore(app);
export const getLushStorage = () => getStorage(app);
// FORCE: This must match the bucket folder name exactly
export const appId = "lush-website-2026";
