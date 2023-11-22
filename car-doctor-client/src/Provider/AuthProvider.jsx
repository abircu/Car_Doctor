import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { URL } from "../config/config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current usser", currentUser);
      setLoading(false);
      // if user exists then issue a token
      if (currentUser) {
        const loggedUser = { email: currentUser.email };
        axios
          .post(`${URL}jwt`, loggedUser, { withCredentials: true })
          .then((res) => {
            console.log("token response", res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  //   Sign in user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authinfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
