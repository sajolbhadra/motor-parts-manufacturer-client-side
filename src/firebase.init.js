// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIdgx-im0rUQqBgegsDCffpf5h4Toypdc",
  authDomain: "electrical-works7.firebaseapp.com",
  projectId: "electrical-works7",
  storageBucket: "electrical-works7.appspot.com",
  messagingSenderId: "264497984123",
  appId: "1:264497984123:web:f05327f8eabd6d925928de",
  measurementId: "G-6EED3FJP47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;