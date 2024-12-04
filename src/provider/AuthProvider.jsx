import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)
    const [loading , setLoading] = useState(true);

    //Register
    const createNewUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login
    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    //Logout
    const logout=()=>{
        return signOut(auth);
    }


    const userInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        logout,
        userLogin,

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe()
        }
    },[])


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

