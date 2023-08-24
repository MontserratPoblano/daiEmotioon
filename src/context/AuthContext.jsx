import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: name,
    });
  };

  const logIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) return <p>Loading</p>;

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    loading,
    logInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
