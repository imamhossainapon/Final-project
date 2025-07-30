// import React, { createContext, useState } from 'react';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
// import { app } from '../Firebase/Firebase.config';
// import { useEffect } from 'react';
// // import { GoogleAuthProvider } from 'firebase/auth';
// export let AuthContext =createContext()


// const AuthProvider = ({children}) => {
//     let [user,SetUser]=useState(null)
//     let [loading,SetLoading]=useState(true)
//     let Auth = getAuth(app)
   
   

//     let SingUp =(email,password)=>{
//          SetLoading(true)
//  return createUserWithEmailAndPassword(Auth,email,password)
//     }
//     let SignIn =(email,password)=>{
//         SetLoading(true)
//  return signInWithEmailAndPassword(email,password)
//     }
//      let SignOut =(Auth)=>{
//         SetLoading(true)
//  return signOut(Auth)
//     }


//     useEffect(()=>{
//         let Unsubscribe = onAuthStateChanged(Auth,(CurrentUser)=>{
//   SetUser(CurrentUser)
//   SetLoading(false)
//         })
//        return () => {
//     Unsubscribe(); 
//   };

//     },[])
//     let googleAuth = new GoogleAuthProvider()

//     let userInfo ={
//         user,
//        loading,
//        googleAuth,
//         SignOut,
//         SignIn,
//          SingUp ,
//          Auth
//     }
//   return (
//     <AuthContext.Provider value={userInfo}>
// {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext, useEffect, useState } from 'react';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  onAuthStateChanged 
} from "firebase/auth";
import { app } from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  // Signup
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SignOut
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Auth State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const googleAuth = new GoogleAuthProvider();

  const authInfo = {
    user,
    loading,
    signUp,
    signIn,
     signOutUser,
    googleAuth,
    auth,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
