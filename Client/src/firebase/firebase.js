
import { initializeApp } from "firebase/app";
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2-iLHsdTgFzlq-qQSOJg9B9nwFXbWcfU",
  authDomain: "ums-react-818df.firebaseapp.com",
  projectId: "ums-react-818df",
  storageBucket: "ums-react-818df.appspot.com",
  messagingSenderId: "705767900396",
  appId: "1:705767900396:web:f73663cd3d2d18f06051c9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const storage = getStorage(app)