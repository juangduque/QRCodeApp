import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrD07iXkt-Q9j4-WEzJRVTMSQ0Q4AZ9fM",
  authDomain: "qrcodeapp-official.firebaseapp.com",
  projectId: "qrcodeapp-official",
  storageBucket: "qrcodeapp-official.appspot.com",
  messagingSenderId: "284210827483",
  appId: "1:284210827483:web:d008e6b36da1b5100afcfe"
};

export const app = firebase.initializeApp(firebaseConfig);