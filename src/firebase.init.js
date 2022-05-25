// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkMVcVDtADhhEoO55xo8ltOwNzeQNvpZ0",
    authDomain: "electronics-warehouse-d0803.firebaseapp.com",
    projectId: "electronics-warehouse-d0803",
    storageBucket: "electronics-warehouse-d0803.appspot.com",
    messagingSenderId: "583262174612",
    appId: "1:583262174612:web:0d1ce08766c5959b622381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;