// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRK-bba5TgHuY1-wP42Q1T6nNv7MyA9p4",
  authDomain: "email-authentication-a8ab3.firebaseapp.com",
  projectId: "email-authentication-a8ab3",
  storageBucket: "email-authentication-a8ab3.appspot.com",
  messagingSenderId: "35045194136",
  appId: "1:35045194136:web:c23cc1970dd6e2117493ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth