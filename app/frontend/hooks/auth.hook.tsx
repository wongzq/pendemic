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

  const signInWithGoogle = async () => {
    try {
      const Gprovider = new firebase.auth.GoogleAuthProvider();
      Gprovider.addScope("https://www.googleapis.com/auth/userinfo.email");
      Gprovider.addScope("https://www.googleapis.com/auth/userinfo.profile");
      await firebase.auth().signInWithPopup(Gprovider);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const FBprovider = new firebase.auth.FacebookAuthProvider();
      FBprovider.addScope("public_profile")
      FBprovider.addScope("email")
      await firebase.auth().signInWithPopup(FBprovider);
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

  return { user, signInWithGoogle,signInWithFacebook, logout };
};

const AuthHook = { useFirebaseAuth };

export default AuthHook;
