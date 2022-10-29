import firebase from 'firebase'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD7WtVKCt1244cYd0xlLQgjruKg0N9_cH0",
    authDomain: "dphiapp-52209.firebaseapp.com",
    databaseURL: "https://dphiapp-52209-default-rtdb.firebaseio.com",
    projectId: "dphiapp-52209",
    storageBucket: "dphiapp-52209.appspot.com",
    messagingSenderId: "1020589588800",
    appId: "1:1020589588800:web:63ca8abc24844c5a75faa5"
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;