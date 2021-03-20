import firebase from 'firebase';

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyChtAqN-3zo2Cw3TwSZWuxCr9rIQy9P9vo",
    authDomain: "react-db-fireabase.firebaseapp.com",
    projectId: "react-db-fireabase",
    storageBucket: "react-db-fireabase.appspot.com",
    messagingSenderId: "576976640067",
    appId: "1:576976640067:web:c016f0d9814a105df5dcf6",
    measurementId: "G-52V6X83DS6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;