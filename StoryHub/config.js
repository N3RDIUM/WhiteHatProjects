import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBnP1ul9sjdLlRrQ8sxiESfyjIa4yUVxEc",
  authDomain: "storyhub-815a3.firebaseapp.com",
  projectId: "storyhub-815a3",
  storageBucket: "storyhub-815a3.appspot.com",
  messagingSenderId: "822089506223",
  appId: "1:822089506223:web:801212b1c012901a2c635a",
  databaseURL:'https://console.firebase.google.com/project/undefined/firestore/data/'
};

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()
