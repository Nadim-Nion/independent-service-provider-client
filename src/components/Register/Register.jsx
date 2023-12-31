import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-96 mx-auto mt-16'>
            <h2 className='text-4xl font-semibold mb-4'>Register your account</h2>

            <form>
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
                    <label className='ps-2' for="check">Accept
                        <Link to="/terms">
                            <button className="btn btn-link ps-2">Terms and Conditions</button>
                        </Link>
                    </label>
                </div>

                <br />

                <button className="btn btn-primary">Register</button>
            </form>
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