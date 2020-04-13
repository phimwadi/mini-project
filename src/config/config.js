import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAG0PcztFappkZ4xYo3ZjFq1GHHhv9byyk",
    authDomain: "mini-project-4e3a0.firebaseapp.com",
    databaseURL: "https://mini-project-4e3a0.firebaseio.com",
    projectId: "mini-project-4e3a0",
    storageBucket: "mini-project-4e3a0.appspot.com",
    messagingSenderId: "545789220788",
    appId: "1:545789220788:web:3b407ae38049ca2f3fc4e1",
    measurementId: "G-W62LRMEBHK"
  };

  const Config = firebase.initializeApp(firebaseConfig)

  export default Config;
  