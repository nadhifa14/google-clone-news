import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUEMlwBWWhsJ226M8YXZe0a-fXIndN-34",
    authDomain: "clone-news.firebaseapp.com",
    projectId: "clone-news",
    storageBucket: "clone-news.appspot.com",
    messagingSenderId: "310430788446",
    appId: "1:310430788446:web:89551bd555656b211d7dcf"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
