import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBnDE1xBZZpBNlGNtWcv1hR74RWwgF1XKI",
    authDomain: "warehouse-ad245.firebaseapp.com",
    projectId: "warehouse-ad245",
    storageBucket: "warehouse-ad245.appspot.com",
    messagingSenderId: "617584110886",
    appId: "1:617584110886:web:f6c55c87ea2b17ea8c65e7",
    measurementId: "G-XJP6HDZKZT"
  };
  

var app = firebase.initializeApp(firebaseConfig);

export default app
export const auth = app.auth()
export const db=app.firestore()
export const storage=app.storage()
export const rDB=getDatabase(app)