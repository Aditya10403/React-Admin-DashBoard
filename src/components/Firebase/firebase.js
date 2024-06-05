// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

import dotenv from 'dotenv'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

dotenv.config()

const firebaseConfig = {
    apiKey: import.meta.proccess.FIREBASE_API,
    authDomain: import.meta.proccess.FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.proccess.FIREBASE_PROJECT_ID,
    storageBucket: import.meta.proccess.FIREBASE_STORAGE,
    messagingSenderId: import.meta.proccess.FIREBASE_MESSAGING_ID,
    appId: import.meta.proccess.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)