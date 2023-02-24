import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"

const clientCredentials = {
    // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGIN_SENDER_ID,
    // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

    apiKey: "AIzaSyDb26URKLgLzDhGkEWKbuQTi7cScw6KdBg",
  authDomain: "talkbox-e5237.firebaseapp.com",
  projectId: "talkbox-e5237",
  storageBucket: "talkbox-e5237.appspot.com",
  messagingSenderId: "1051465458837",
  appId: "1:1051465458837:web:6a54280a267cc6c9a0e79c",
  measurementId: "G-EPPVRL33CF"
}

const fireapp = initializeApp(clientCredentials);
export const auth = getAuth();
