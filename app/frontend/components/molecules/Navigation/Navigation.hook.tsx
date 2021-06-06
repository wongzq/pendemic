import FirebaseConfig from "@configs/firebase.config";
import firebase from "firebase";
import React from "react";

const useAuthentication = () => {
  const [test, setTest] = React.useState("");
  const login = async () => {
    try {
      FirebaseConfig.init();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/userinfo.email");
      provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
      firebase.auth().useDeviceLanguage();

      const result = await firebase.auth().signInWithPopup(provider);
      alert("Email " + result.user?.email);
      setTest(result.user?.email ?? "Fail");

      if (result.credential) {
        const credential: firebase.auth.OAuthCredential = result.credential;
        const token = credential.accessToken;
        console.log(credential);
        console.log(result.user);
      }
    } catch (err) {
      alert(err);
    }
  };

  const signup = async () => {};

  return { login, signup, test };
};

const NavigationHook = { useAuthentication };

export default NavigationHook;
