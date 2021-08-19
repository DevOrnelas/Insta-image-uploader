import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'


  // Your web app's Firebase configuration

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB3jrYDabk4g3KeHPr0aeumxVIMmPYLgXU",
    authDomain: "instagramz-90ded.firebaseapp.com",
    projectId: "instagramz-90ded",
    storageBucket: "instagramz-90ded.appspot.com",
    messagingSenderId: "424664564762",
    appId: "1:424664564762:web:90c6c136b70533eda1bda3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage, projectFirestore, timestamp}