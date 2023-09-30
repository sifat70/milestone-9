// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATNeIXfuwF7q0uvSBsQ7MTM5X8rNe2flA",
    authDomain: "auth-moha-milon-be024.firebaseapp.com",
    projectId: "auth-moha-milon-be024",
    storageBucket: "auth-moha-milon-be024.appspot.com",
    messagingSenderId: "22760411475",
    appId: "1:22760411475:web:1a029f1aabd7d0b9ed11a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

