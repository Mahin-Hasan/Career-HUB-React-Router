import { createContext } from "react";
import app from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth"


export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    //google auth
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //email and pass 
    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const AuthInfo = {
        googleSignIn,
        signUp
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;