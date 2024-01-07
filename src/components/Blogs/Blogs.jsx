import React from 'react';

const Blogs = () => {
    return (
        <div className='text-lg container mx-auto px-32'>
            <article className='my-8'>
                <h2 className='font-semibold mb-2'>Q.1: Differences between authorization and authentication?</h2>
                <p>Answer:
                    Authentication is the process of verifying the identity of a user, system, or entity, ensuring that they are who they claim to be. This is typically achieved through the use of passwords, biometrics, or other credentials.

                    Authorization, on the other hand, comes after authentication and involves granting or denying access rights and permissions to authenticated users. It defines what actions or resources a user is allowed to access based on their authenticated identity.

                    In summary, authentication confirms identity, while authorization determines the level of access or permissions granted to that authenticated identity.
                </p>
            </article>

            <article className='my-8'>
                <h2 className='font-semibold mb-2'>Q.2: Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Answer:
                    Firebase is chosen for its ease of setup, scalability, and integration with other Firebase features. It offers a variety of authentication methods, including email/password, social logins, and phone authentication.

                    <br /> <br />

                    Other viable options for authentication include: <br /> <br />

                    Auth0: Comprehensive identity platform with extensive customization and enterprise-grade security. <br /> <br />

                    AWS Cognito:  Well-integrated with AWS services, offering user pools and identity pools for flexible authentication. <br /> <br />

                    Okta: Cloud-based identity platform with robust features for user management, access control, and security.


                </p>
            </article>

            <article className='my-8'>
                <h2 className='font-semibold mb-2'>Q.3: What other service does firebase provide other than authentication?
                </h2>
                <p>Answer:
                    Firebase offers a comprehensive set of services beyond authentication, making it a full-stack development platform. Some notable services include:
                    <br /> <br />

                    1. Realtime Database: A NoSQL database that allows developers to store and sync data in real-time.
                    <br /> <br />

                    2. Cloud Fire-store: A scalable and flexible NoSQL document database for web, mobile, and server development.
                    <br /> <br />

                    3. Cloud Functions: Serverless compute service that allows running custom backend code in response to events triggered by Firebase features and HTTPS requests.
                    <br /> <br />

                    4. Cloud Storage: A secure and scalable object storage solution for storing and serving user-generated content.
                    <br /> <br />

                    5. Hosting: Firebase Hosting provides fast and secure web hosting for developers to deploy web apps and static content.
                    <br /> <br />


                    These services collectively offer a robust and integrated platform for building and managing modern web and mobile applications.
                </p>
            </article>
        </div>
    );
};

export default Blogs;