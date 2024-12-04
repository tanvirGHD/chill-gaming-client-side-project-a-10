import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUsers] = useState(null);
    const [loading , setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const userInfo = {
        user,
        loading,
        createUser,
        
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

