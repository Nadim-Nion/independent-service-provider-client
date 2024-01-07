import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const Social = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User logged-in successfully');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <div className='flex items-center'>
                <div style={{ height: '1px' }} className='bg-purple-700 w-1/2'></div>
                <p className='mx-2'>or</p>
                <div style={{ height: '1px' }} className='bg-purple-700 w-1/2'></div>
            </div>
            <div className='flex justify-center items-center mt-2'>
                <button onClick={handleGoogleSignIn} className="btn btn-primary w-1/2">
                    <div className='text-lg'>
                        <FcGoogle />
                    </div>
                    Sign in With Google
                </button>
            </div>
        </div>
    );
};

export default Social;