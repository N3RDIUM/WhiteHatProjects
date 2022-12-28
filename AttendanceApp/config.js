import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDYup2y1MKzpAWtdMPYxNfx633o7aQX68Y",
  authDomain: "attendance-app-761ba.firebaseapp.com",
  projectId: "attendance-app-761ba",
  storageBucket: "attendance-app-761ba.appspot.com",
  messagingSenderId: "47436408908",
  appId: "1:47436408908:web:28c056b7b2914b35db2ce9"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();