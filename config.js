import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDuUmogiz7eHmKOaHntkRgwzSLkuJDpQkg",
  authDomain: "diaaxlei.firebaseapp.com",
  projectId: "diaaxlei",
  storageBucket: "diaaxlei.appspot.com",
  messagingSenderId: "1047919582153",
  appId: "1:1047919582153:web:588c43376451042d5ba618"
//   measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
