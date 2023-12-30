import React from 'react';
import error from "../../assets/images/404error.png";

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center text-4xl my-12'>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
            <img className='w-96  mx-auto' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;