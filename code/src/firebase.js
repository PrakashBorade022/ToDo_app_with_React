// const firebaseConfig = {
    
//   };

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5tclCQS2oVICETjwKev1t6zpRhNw3L0U",
    authDomain: "todo-app-cp-a74a2.firebaseapp.com",
    databaseURL: "https://todo-app-cp-a74a2.firebaseio.com",
    projectId: "todo-app-cp-a74a2",
    storageBucket: "todo-app-cp-a74a2.appspot.com",
    messagingSenderId: "968862824257",
    appId: "1:968862824257:web:b475b4f8a7949f2bda53c0",
    measurementId: "G-EC4818RGNH"
});

const db = firebaseApp.firestore();

export default  db ;

