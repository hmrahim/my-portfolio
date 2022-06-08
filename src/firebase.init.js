import {getAuth} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU75c1Bl66RLJ1cQx7RwEQJv6B5uDxmgY",
  authDomain: "hm-rahim.firebaseapp.com",
  projectId: "hm-rahim",
  storageBucket: "hm-rahim.appspot.com",
  messagingSenderId: "414604883279",
  appId: "1:414604883279:web:ba2afae2c75bd18aba413a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth