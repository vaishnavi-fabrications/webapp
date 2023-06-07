// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_OofeSB9R0vqG2gSvt2VCCVgDS5-VLVs",
  authDomain: "vaishnaviwebapp.firebaseapp.com",
  projectId: "vaishnaviwebapp",
  storageBucket: "vaishnaviwebapp.appspot.com",
  messagingSenderId: "421892967183",
  appId: "1:421892967183:web:4b3c84fc59ef74b8108c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
export { app,auth,storage };