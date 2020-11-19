import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwsBbBF2bznjRxEKSLvAAEifYA7fbN6Yo",
  authDomain: "clone-aec4b.firebaseapp.com",
  databaseURL: "https://clone-aec4b.firebaseio.com",
  projectId: "clone-aec4b",
  storageBucket: "clone-aec4b.appspot.com",
  messagingSenderId: "76050339021",
  appId: "1:76050339021:web:5d469d3538850f341f4584",
  measurementId: "G-GRDQNBBQ8B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };