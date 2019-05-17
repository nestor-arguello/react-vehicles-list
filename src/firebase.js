import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBEHzJ-j2slStAwaWJi-cVUwtTKbWsn-zg',
  authDomain: 'phinx-tp-nestor.firebaseapp.com',
  databaseURL: 'https://phinx-tp-nestor.firebaseio.com',
  projectId: 'phinx-tp-nestor',
  storageBucket: 'phinx-tp-nestor.appspot.com',
  messagingSenderId: '584405729890',
  appId: '1:584405729890:web:654858e05a24ffeb'
};

firebase.initializeApp(firebaseConfig);
export default firebase;