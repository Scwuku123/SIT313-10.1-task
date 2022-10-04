// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const app = firebase.initializeApp({
    apiKey: "AIzaSyAA9IQX-4PbePCuUpPvAo1_UBdQX8vuNQk",
    authDomain: "login-18461.firebaseapp.com",
    projectId: "login-18461",
    storageBucket: "login-18461.appspot.com",
    messagingSenderId: "128704178762",
    appId: "1:128704178762:web:3e64c3f0d13fafddf954b3",
    measurementId: "G-MW7ZPC42DT",
    databseURL: "https://login-18461-default-rtdb.firebaseio.com"
    //databseURL: "https://deakindev-22ce9-default-rtdb.firebaseio.com/"
  })

  

  
  export const auth = app.auth()
  export default app