import {initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBw1zQUFgj-7TcGjSvpc4coBytgpyw0C8A",
  authDomain: "fee-manager-2c694.firebaseapp.com",
  projectId: "fee-manager-2c694",
  storageBucket: "fee-manager-2c694.appspot.com",
  messagingSenderId: "38411337828",
  appId: "1:38411337828:web:96ff566141ab2d94ac1f71",
  measurementId: "G-N9FV23GZ2C"
};

const app = initializeApp (firebaseConfig)

export default getFirestore(app)