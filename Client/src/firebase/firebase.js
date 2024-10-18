
import { initializeApp } from "firebase/app";
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import axios from "axios";

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

export async function uploadImagesToFireStore(image, userid) {
  try {
    // Create a reference to the file in storage
    const storageRef = ref(storage, `images/${image.name}`);

    // Upload the image
    await uploadBytes(storageRef, image);
    console.log('Uploaded a blob or file!');

    // Get the download URL
    const url = await getDownloadURL(storageRef);

    // Post the URL to your API
    const response = await axios.patch('http://localhost:8000/Images', { url, userid }, { withCredentials: true });
    
    // Return the response
    return response.data.url;
  } catch (error) {
    throw new Error(error.message);
  }
}