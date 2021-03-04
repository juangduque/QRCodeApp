// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

  // Your web app's Firebase configuration
import * as firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrD07iXkt-Q9j4-WEzJRVTMSQ0Q4AZ9fM",
  authDomain: "qrcodeapp-official.firebaseapp.com",
  projectId: "qrcodeapp-official",
  storageBucket: "qrcodeapp-official.appspot.com",
  messagingSenderId: "284210827483",
  appId: "1:284210827483:web:d008e6b36da1b5100afcfe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const app = firebase.initializeApp(firebaseConfig);