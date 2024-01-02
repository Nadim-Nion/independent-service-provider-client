import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { space } from 'postcss/lib/list';

const Login = () => {
    const { signIn, resetPassword } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [toast, setToast] = useState(false);
    const [show, setShow] = useState(false);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // Clear the previous error message
        setError('');

        // Clear the previous success message
        setSuccess('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setSuccess('user logged-in done');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleResetPassword = () => {
        const email = emailRef.current.value;

        resetPassword(email)
            .then(() => {
                setToast(true);
            })
            .catch(error => {
                setError(error);
            })
    }

    return (
        <div className='w-96 mx-auto mt-16'>
            <h2 className='text-4xl font-semibold mb-4'>Login your account</h2>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Email Address</label>
                    <br />
                    <input ref={emailRef} className='mt-4' type="email" name="email" id="email" placeholder='Your Email' required />
                </div>

                <br />

                <div>
                    <label>Password</label>
                    <br />
                    <input className='my-4' type={show ? "text" : "password"} name="password" id="password" placeholder='Your Password' required />
                    <p onClick={() => setShow(!show)}>
                        <small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </small>
                    </p>
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
            <p className='my-2 text-green-700'>{success}</p>
            <p className='my-2 text-red-700'>{error}</p>
            <p>
                Forget your password? Please<button onClick={handleResetPassword} className="btn btn-link ps-2">Reset Password</button>
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