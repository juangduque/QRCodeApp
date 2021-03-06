import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "yourApiKey",
  authDomain: "yourAuthDomain",
  projectId: "yourProjectId",
  storageBucket: "yourStorageBucket",
  messagingSenderId: "284210827483",
  appId: "yourAppId"
};

export const app = firebase.initializeApp(firebaseConfig);