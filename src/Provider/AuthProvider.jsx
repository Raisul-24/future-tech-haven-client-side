import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState();
   const [loading, setLoading] = useState(true);


   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }
   const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   const googleSignIn = () => {
      return signInWithPopup(auth, googleProvider);
   }
   const githubSignIn = () => {
      return signInWithPopup(auth, githubProvider);
   }
   const logOut = () => {
      return signOut(auth);
   }
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         // console.log("State Changes")
         setUser(currentUser);
      })
      return (() => {
         return unsubscribe();
      })
   }, [])

   const AuthInfo = {
      user,
      loading,
      createUser,
      signInUser,
      googleSignIn,
      githubSignIn,
      logOut,
   }
   return (
      <AuthContext.Provider value={AuthInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;