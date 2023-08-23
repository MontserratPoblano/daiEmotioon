// src/context/AuthContext.js
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import PropTypes from "prop-types"; // Importa PropTypes

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password);
  };

  const logIn = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
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
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Valida la presencia de 'children'
};

export default AuthProvider;
