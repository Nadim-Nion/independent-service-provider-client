import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

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

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
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
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label className='ps-2' htmlFor="check">Accept
                        <Link to="/terms">
                            <button className="btn btn-link ps-2">Terms and Conditions</button>
                        </Link>
                    </label>
                </div>

                <br />

                <button className="btn btn-primary">Register</button>
            </form>
            <p className='mt-2 text-red-700'>{error}</p>
            <p>
                Already have an account?
                <Link to="/login">
                    <button className="btn btn-link ps-2">Login</button>
                </Link>
            </p>
        </div>
    );
};

export default Register;