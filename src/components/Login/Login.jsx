import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // Clear the previous error message
        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='w-96 mx-auto mt-16'>
            <h2 className='text-4xl font-semibold mb-4'>Login your account</h2>

            <form onSubmit={handleLogin}>
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
                    <label className='ps-2' htmlFor="check">Check me out</label>
                </div>

                <br />

                {/* <input type="submit" value="Login" /> */}
                <button className="btn btn-primary">Login</button>
            </form>
            <p className='mt-2 text-red-700'>{error}</p>
            <p>
                Do not have any account?
                <Link to="/register">
                    <button className="btn btn-link ps-2">Register</button>
                </Link>
            </p>
        </div>
    );
};

export default Login;