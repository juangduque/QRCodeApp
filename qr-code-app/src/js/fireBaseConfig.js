import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "yourApiKey",
  authDomain: "yourAuthDomain",
  projectId: "yourProjectId",
  storageBucket: "yourStorageBucket",
  messagingSenderId: "yourMessagingSenderId,
  appId: "yourAppId"
};

export const app = firebase.initializeApp(firebaseConfig);
