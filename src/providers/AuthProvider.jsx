/* eslint-disable react-refresh/only-export-components */
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
