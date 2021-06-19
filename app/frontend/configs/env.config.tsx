const EnvConfig = {
  FIREBASE_WEB_SDK: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey ?? "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain ?? "",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId ?? "",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket ?? "",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId ?? "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_appId ?? "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId ?? "",
  },
};

export default EnvConfig;
