import firebase from "firebase/app";
import EnvConfig from "@configs/env.config";

const FirebaseApp = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(EnvConfig.FIREBASE_WEB_SDK);

export default FirebaseApp;
