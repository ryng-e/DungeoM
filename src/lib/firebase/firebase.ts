import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBi2oiiwKc9hi-hpUkuT-pNUfEiNPS8GPA",
    authDomain: "dungeom-24457.firebaseapp.com",
    projectId: "dungeom-24457",
    storageBucket: "dungeom-24457.firebasestorage.app",
    messagingSenderId: "212101922982",
    appId: "1:212101922982:web:0271a603ac94ae7c3b3467",
    measurementId: "G-015HFSZR0P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();