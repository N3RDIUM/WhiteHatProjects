import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCyNUD8rpmyxGphkX-KoFf8gneRLZCLIvs",
  authDomain: "health-hqei.firebaseapp.com",
  databaseURL:'https://health-hqei-default-rtdb.firebaseio.com/',
  projectId: "health-hqei",
  storageBucket: "health-hqei.appspot.com",
  messagingSenderId: "752154928781",
  appId: "1:752154928781:web:910e0fe1cd7dcc82bf24c4"
};
firebase.initializeApp(firebaseConfig)
export default firebase.database()