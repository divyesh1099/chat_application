import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_EGEwYVlXpAWJYm9tVQHU3PkW3u9p3dA",
    authDomain: "chat-application-7234b.firebaseapp.com",
    projectId: "chat-application-7234b",
    storageBucket: "chat-application-7234b.appspot.com",
    messagingSenderId: "1080670429882",
    appId: "1:1080670429882:web:d4e3dac67dcd7acc045883"
  };

const app = firebase.initializeApp(firebaseConfig);
const database = app.firestore();
export default database;
