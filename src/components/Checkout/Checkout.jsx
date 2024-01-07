import React, { useState } from 'react';

const Checkout = () => {
    const [toast, setToast] = useState(false);


    const handleConfirm = () => {

        setToast(true);

    }

    return (
        <div className='container mx-auto w-96 mt-16'>
            <form>
                <div>
                    <label>Name</label>
                    <br />
                    <input className='mt-4' type="text" name="name" id="name" placeholder='Your Name' required />
                </div>

                <br />

                <div>
                    <label>Email Address</label>
                    <br />
                    <input className='mt-4' type="email" name="email" id="email" placeholder='Your Email' required />
                </div>

                <br />

                <div>
                    <label>Address</label>
                    <br />
                    <input className='mt-4' type="text" name="address" id="address" placeholder='Your Address' required />
                </div>

                <br />

                <div>
                    <label>Phone Number</label>
                    <br />
                    <input className='mt-4' type="text" name="phone" id="phone" placeholder='Phone Number' required />
                </div>

                <br />

                <button onClick={handleConfirm} className="btn btn-primary">Confirm</button>

                {
                    toast && <div className="toast toast-top toast-end">
                        <div className="alert alert-info">
                            <span>Thank you for the booking</span>
                        </div>
                    </div>
                }
            </form>
        </div>
    );
};

export default Checkout;