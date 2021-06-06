import "firebase/auth"
import firebase from "firebase/app";
import FirebaseConfig from "@configs/firebase.config";
import React from "react";
import ApiRoutes from "@routes/api.routes";

const useFirebaseAuth = () => {
  const [user, setUser] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    FirebaseConfig.init();

    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) ApiRoutes.login(await user.getIdToken());
    });
  }, []);

  const login = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/userinfo.email");
      provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
      await firebase.auth().signInWithPopup(provider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.error(err);
    }
  };

  return { user, login, logout };
};

const AuthHook = { useFirebaseAuth };

export default AuthHook;
