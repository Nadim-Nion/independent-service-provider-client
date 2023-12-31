import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-96 mx-auto mt-16'>
            <h2 className='text-4xl font-semibold mb-4'>Please Login</h2>

            <form>
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
                    <label className='ps-2' for="check">Check me out</label>
                </div>

                <br />

                {/* <input type="submit" value="Login" /> */}
                <button className="btn btn-primary">Login</button>
            </form>
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