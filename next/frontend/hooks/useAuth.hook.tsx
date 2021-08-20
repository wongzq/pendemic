import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import FirebaseApp from "@configs/firebase.config";
import React from "react";
import ApiRoutes from "@routes/api.routes";

const useAuth = () => {
  const auth = getAuth(FirebaseApp);

  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, async (user) => setUser(user));
    return () => setUser(null);
  }, []);

  const signInWithGoogle = async () => {
    try {
      const Gprovider = new GoogleAuthProvider();
      Gprovider.addScope("email");
      Gprovider.addScope("profile");

      const credential = await signInWithPopup(auth, Gprovider);
      await ApiRoutes.signIn(credential);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const FBprovider = new FacebookAuthProvider();
      FBprovider.addScope("email");
      FBprovider.addScope("public_profile");

      const credential = await signInWithPopup(auth, FBprovider);
      await ApiRoutes.signIn(credential);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return { user, signInWithGoogle, signInWithFacebook, logout };
};

export default useAuth;
