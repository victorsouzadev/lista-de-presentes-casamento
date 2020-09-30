import * as firebase from "firebase/app";
import firebaseConfig from "./ConfigFirebase"

// Add the Firebase products that you want to use

import "firebase/firebase-database";
import "firebase/firebase-auth"

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase