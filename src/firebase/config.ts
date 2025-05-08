import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJvoFoWI-12mNv9gdThBVo87-zW7XEMYs",
  authDomain: "maranatha-app-react.firebaseapp.com",
  projectId: "maranatha-app-react",
  storageBucket: "maranatha-app-react.firebasestorage.app",
  messagingSenderId: "54358744221",
  appId: "1:54358744221:web:f680307ac565cf3d224874"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);


// Exporte os serviços necessários
export const auth = getAuth(app);
export const db = getFirestore(app);