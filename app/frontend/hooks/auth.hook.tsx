import "firebase/auth";
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
      if (user) ApiRoutes.signIn(user.uid);
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      const Gprovider = new firebase.auth.GoogleAuthProvider();
      Gprovider.addScope("https://www.googleapis.com/auth/userinfo.email");
      Gprovider.addScope("https://www.googleapis.com/auth/userinfo.profile");
      
      const credential = await firebase.auth().signInWithPopup(Gprovider);
      if (!credential.user?.uid) throw Error("User not found");

      await ApiRoutes.signIn(credential.user.uid);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const FBprovider = new firebase.auth.FacebookAuthProvider();
      FBprovider.addScope("email");
      FBprovider.addScope("public_profile");
      
      const credential = await firebase.auth().signInWithPopup(FBprovider);
      if (!credential.user?.uid) throw Error("User not found");

      await ApiRoutes.signIn(credential.user.uid);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return { user, signInWithGoogle, signInWithFacebook, logout };
};

const AuthHook = { useFirebaseAuth };

export default AuthHook;
