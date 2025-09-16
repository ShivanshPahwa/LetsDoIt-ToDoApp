// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAG2ixg-NdgouHvQn_HgdhD0V83qu6K4s",
  authDomain: "letsdoit-shivansh-todolist.firebaseapp.com",
  projectId: "letsdoit-shivansh-todolist",
  storageBucket: "letsdoit-shivansh-todolist.firebasestorage.app",
  messagingSenderId: "78927173784",
  appId: "1:78927173784:web:62a38dc950622035d018ed",
  measurementId: "G-QNKPBLVX5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);