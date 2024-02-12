// Import the functions you need from the SDKs you need

// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyAkB43ITd69ASz3xW-rBlZ2wlgyGEM_W3k",
  authDomain: "fir-fordummy.firebaseapp.com",
  projectId: "fir-fordummy",
  storageBucket: "fir-fordummy.appspot.com",
  messagingSenderId: "421998889008",
  appId: "1:421998889008:web:f750a375da0ae361c385f5",
  measurementId: "G-L3K3T324SD"
};
const app = initializeApp(firebaseConfig );
const dataBase =  getFirestore(app);
export {dataBase}



