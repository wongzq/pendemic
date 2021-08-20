import admin from "firebase-admin";
import EnvConfig from "#configs/env.config";

const credential = {
  credential: admin.credential.cert(EnvConfig.FIREBASE_ADMIN_SDK as any),
};

const FirebaseAdmin = admin.apps.length
  ? admin.app()
  : admin.initializeApp(credential);

export default FirebaseAdmin;
