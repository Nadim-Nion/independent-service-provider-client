import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='mx-72'>
            <h2 className='mb-2'>Our Terms and Conditions</h2>
            <p>Terms and Conditions of Bridal Portraiture
                <br /> <br />

                1. Acceptance of Terms
                By accessing or using The Dragon News Portal, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use the Portal. <br />

                2. User Eligibility
                The Portal is intended for users who are at least 18 years old. By using the Portal, you confirm that you are at least 18 years of age. <br />

                3. Content Ownership and Usage
                All content published on the Portal, including articles, images, and multimedia, is the property of The Dragon News or its content providers. You may not reproduce, distribute, modify, or republish any content from the Portal without prior written consent. <br />

                4. User Conduct
                Users are prohibited from engaging in any activity that disrupts the normal functioning of the Portal, including but not limited to hacking, spreading malware, or attempting to gain unauthorized access to the Portals systems. <br />

                5. Registration and Account Security
                Certain features of the Portal may require you to register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. <br />

                6. Comments and User Contributions
                Users may submit comments or other content to the Portal. By doing so, you grant The Dragon News a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, reproduce, and distribute your content. <br />

                7. Privacy Policy
                The use of personal information provided by users is governed by our Privacy Policy, which can be found on the Portal. By using the Portal, you consent to the terms of the Privacy Policy. <br />

                8. Third-Party Links
                The Portal may contain links to third-party websites. These links are provided for convenience only, and The Dragon News does not endorse or control the content of these third-party sites. We are not responsible for the content, accuracy, or reliability of any linked website. <br />

                9. Disclaimer of Warranties
                The Portal is provided without any warranties, either expressed or implied. The Dragon News disclaims all warranties, including but not limited to the accuracy, reliability, or completeness of the content on the Portal. <br />

                10. Limitation of Liability
                The Dragon News and its affiliates will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the Portal. <br />

                11. Changes to Terms and Conditions
                The Dragon News reserves the right to modify or update these terms and conditions at any time. Users are encouraged to review the terms regularly to stay informed of any changes. <br />

                12. Contact Information
                For questions or concerns regarding these terms and conditions, please contact us at contact@thedragonnews.com

                By using The Dragon News Portal, you agree to abide by these terms and conditions.</p> <br />

            <p className='text-dark'>
                Go back to
                <button className="btn btn-link">
                    <Link to="/register">Register</Link>
                </button>
            </p>
        </div>
    );
};

export default Terms;