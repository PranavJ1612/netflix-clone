import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmBob962fb1U9pwl-DtAHRbDRIOt7krlM",
  authDomain: "netflix-clone-5cc1e.firebaseapp.com",
  projectId: "netflix-clone-5cc1e",
  storageBucket: "netflix-clone-5cc1e.appspot.com",
  messagingSenderId: "199060446796",
  appId: "1:199060446796:web:1f4352ba744c782cffdee9"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);