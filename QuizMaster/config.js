import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB0VUTDJmzjs4nXamOvkEbl2QNdytN7S5A',
  authDomain: 'wireless-buzzer-db9fe.firebaseapp.com',
  databaseURL:'https://wireless-buzzer-db9fe-default-rtdb.firebaseio.com/',
  projectId: 'wireless-buzzer-db9fe',
  storageBucket: 'wireless-buzzer-db9fe.appspot.com',
  messagingSenderId: '378504624538',
  appId: '1:378504624538:web:475da38b8444cefa2ae223',
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
