// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: <YOUR_API_KEY>,
  authDomain: <AUTH_DOMAIN>,
  projectId: <PROJECT_ID>,
  storageBucket: <STORAGE_BUCKET>,
  messagingSenderId: <MESSAGING_SENDER_ID>,
  appId: <APP_ID>
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);