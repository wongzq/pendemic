import "firebase/auth";
import firebase from "firebase/app";
import FirebaseApp from "@configs/firebase.config";
import React from "react";
import ApiRoutes from "@routes/api.routes";

const useFirebaseAuth = () => {
  const [user, setUser] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    FirebaseApp.auth().onAuthStateChanged(async (user) => setUser(user));
    return () => setUser(null);
  }, []);

  const signInWithGoogle = async () => {
    try {
      const Gprovider = new firebase.auth.GoogleAuthProvider();
      Gprovider.addScope("email");
      Gprovider.addScope("profile");

      const credential = await FirebaseApp.auth().signInWithPopup(Gprovider);
      await ApiRoutes.signIn(credential);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const FBprovider = new firebase.auth.FacebookAuthProvider();
      FBprovider.addScope("email");
      FBprovider.addScope("public_profile");

      const credential = await FirebaseApp.auth().signInWithPopup(FBprovider);
      await ApiRoutes.signIn(credential);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await FirebaseApp.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  };

  return { user, signInWithGoogle, signInWithFacebook, logout };
};

const AuthHook = { useFirebaseAuth };

export default AuthHook;
