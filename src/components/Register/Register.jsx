import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Social from '../Social/Social';

const Register = () => {
    const { createUser, updateUserData, sendVerificationToEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [toast, setToast] = useState(false);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);

        // Clear the previous error message
        setError('');

        // Clear the previous success message
        setSuccess('');

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                form.reset();
                setSuccess('new user created');
                updateUserData(newUser, name);
                sendVerificationToEmail(newUser)
                    .then(() => {
                        setToast(true);
                    })
                    .catch(error => {
                        setError(error.message);
                    })
            })
            .catch(error => {
                console.log(error);
            })

        updateUserData({
            displayName: name
        })
            .then(() => {
                console.log("user name updated");
            })
            .catch(error => {
                setError(error.message);
            })

    }


    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <div className='w-96 mx-auto mt-16'>
            <h2 className='text-4xl font-semibold mb-4'>Register your account</h2>

            <form onSubmit={handleRegister}>
                <div>
                    <label>Name</label>
                    <br />
                    <input className='my-4' type="text" name="name" id="name" placeholder='Your Name' required />
                </div>

                <div>
                    <label>Photo URL</label>
                    <br />
                    <input className='my-4' type="text" name="photo" id="photo" placeholder='Your Photo URL' required />
                </div>

                <div>
                    <label>Email Address</label>
                    <br />
                    <input className='mt-4' type="email" name="email" id="email" placeholder='Your Email' required />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />
                    <input className='mt-4' type="password" name="password" id="password" placeholder='Your Password' required />
                </div>

                <br />

                <div>
                    <input onClick={handleAccepted} type="checkbox" name="checkbox" id="checkbox" />
                    <label className='ps-2' htmlFor="check">Accept
                        <Link to="/terms">
                            <button className="btn btn-link ps-2">Terms and Conditions</button>
                        </Link>
                    </label>
                </div>

                <br />

                <button disabled={!accepted} className="btn btn-primary">Register</button>
            </form>
            <p className='my-2 text-green-700'>{success}</p>
            <p className='mt-2 text-red-700'>{error}</p>
            <p>
                Already have an account?
                <Link to="/login">
                    <button className="btn btn-link ps-2">Login</button>
                </Link>
            </p>
            <div>
                {
                    toast &&
                    <div className="toast toast-top toast-end">
                        <div className="alert alert-info">
                            <span>Check your email</span>
                        </div>
                    </div>
                }
            </div>
            <Social></Social>
        </div>
    );
};

export default Register;