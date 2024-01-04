import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserData = (user, name) => {
        return updateProfile(user, { displayName: name });
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const sendVerificationToEmail = (user) => {
        return sendEmailVerification(user);
    }

    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged-in user inside auth state observer', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        createUser,
        signIn,
        updateUserData,
        logOut,
        sendVerificationToEmail,
        resetPassword,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;