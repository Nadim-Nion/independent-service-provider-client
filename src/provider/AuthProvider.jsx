import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserData = (user, name) => {
        return updateProfile(user, { displayName: name });
    }

    const logOut = () => {
        return signOut(auth);
    }

    const sendVerificationToEmail = (user) => {
        return sendEmailVerification(user);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged-in user inside auth state observer', loggedUser);
            setUser(loggedUser);
        });

        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        auth,
        user,
        createUser,
        signIn,
        updateUserData,
        logOut,
        sendVerificationToEmail,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;