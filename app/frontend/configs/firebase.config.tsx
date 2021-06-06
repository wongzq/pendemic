import firebase from "firebase/app";

const FirebaseConfig = {
  init: () => {
    const config = {
      apiKey: "AIzaSyDvGxTtsdHqKS46cCjDA_Kh-lgqZv8Yyv8",
      authDomain: "pendemic-by-zq.firebaseapp.com",
      projectId: "pendemic-by-zq",
      storageBucket: "pendemic-by-zq.appspot.com",
      messagingSenderId: "813736358656",
      appId: "1:813736358656:web:35fcfbc0501589f24179e5",
      measurementId: "G-KKQLW4T9G9",
    };

    firebase.apps.length ? firebase.app() : firebase.initializeApp(config);
    firebase.analytics();
    firebase.performance();
  },
};

export default FirebaseConfig;
