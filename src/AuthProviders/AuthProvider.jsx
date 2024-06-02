import { createContext, useEffect, useState } from "react";


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebaseConfig";

export const Authcontext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const CreateRegister = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const SignInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

   useEffect(()=>{
    const unsbusCribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
return ()=>{
    unsbusCribe()
}

   },[]) 

    const logOut = ()=>{
        return signOut(auth)
    }

    const AuthInfo ={
        user,
        loading,
        CreateRegister,
        SignInUser,
        logOut

    }

    return (
        <Authcontext.Provider value={AuthInfo}>
            {children}
            
        </Authcontext.Provider>
    );
};

export default AuthProvider;