import { createUserWithEmailAndPassword, onAuthStateChanged,GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    console.log(user)
    const [loading , setLoading] = useState(true);

    //Register
    const createNewUser = (email, password,) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password,);
    }


    //Login
    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    //Google Login
    const handleGoogleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }


    //Logout
    const logout=()=>{
        return signOut(auth);
    }


    const manageProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
        .then(() => {
            setUser({
                ...auth.currentUser,
                displayName: name,
                photoURL: photo,
            });
        });
    };


    const userInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        logout,
        userLogin,
        manageProfile,
        handleGoogleLogin


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

