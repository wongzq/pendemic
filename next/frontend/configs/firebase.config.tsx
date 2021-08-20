import { getApp, getApps, initializeApp } from "firebase/app";
import EnvConfig from "@configs/env.config";

const FirebaseApp = getApps().length
  ? getApp()
  : initializeApp(EnvConfig.FIREBASE_WEB_SDK);

export default FirebaseApp;
