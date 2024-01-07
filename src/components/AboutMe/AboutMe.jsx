import React from 'react';
import image from '../../assets/images/my-image.png';

const AboutMe = () => {
    return (
        <div className='container mx-auto px-32 mt-10'>
            <div className='w-60 container mx-auto'>
                <img src={image} alt="" />
            </div>
            <div className='mt-4 text-lg'>
                <h2 className='mb-2'>Hi, This is Nadim Mahmud Nion</h2>
                <p>My career goal is to become a seasoned Front-end Developer recognized for creating immersive and responsive user interfaces. I aim to deepen my expertise in React, explore advanced state management solutions, and contribute to open-source projects. Additionally, I aspire to stay abreast of emerging technologies, ensuring my skills align with industry trends, while also mentoring and inspiring other developers in the community.
                    <br /> <br />

                    My expertise in the following technologies: <br />

                    Front-end: React, React Router, CSS Frameworks (Tailwind, Bootstrap and React Bootstrap), DaisyUI <br />

                    Back-end: Express JS <br />

                    Tools: Vercel, Netlify, Firebase, Surge, npm, VS Code, Git, GitHub

                </p>
            </div>
        </div>
    );
};

export default AboutMe;