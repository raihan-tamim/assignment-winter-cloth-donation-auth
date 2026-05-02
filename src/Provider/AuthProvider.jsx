import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './../Firebase/firebase.init';
import { Bounce, ToastContainer } from "react-toastify";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const forgetPass=(email)=>{
        return sendPasswordResetEmail(auth, email);
    }

    const logoutUser = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                // console.log('id logged in', currentUser)
                setUser(currentUser)
            } else {
                setUser("")
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        createUser,
        signInUser,
        user,
        setUser,
        logoutUser,
        googleSignIn,
        forgetPass,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer
                
            />
        </AuthContext.Provider>
    );
};

export default AuthProvider;