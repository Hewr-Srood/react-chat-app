import firebase from 'firebase/app'
import '.firebase/auth'
import '.firebase/database'
import '.firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAAE3FO6sN2HH7rLVPUK_M1J-Q6wGskHzs",
    authDomain: "react-chat-app- .firebaseapp.com",
    databaseURL: "https://react-chat-app-22e4b.firebaseio.com",
    projectId: "react-chat-app-22e4b",
    storageBucket: "react-chat-app-22e4b.appspot.com",
    messagingSenderId: "85919209343",
    appId: "1:85919209343:web:4567772bdd814ed092ac4a",
    measurementId: "G-27X3DY8EGB"
};
firebase.initializeApp(firebaseConfig);
export default firebase;