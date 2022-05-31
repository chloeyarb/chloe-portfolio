import React from 'react';
import Avatar from '../../assets/images/Avatar.png';

function About() {

    return (
        <section id="about-section">
            <div>
                <h1 id="about" className='text-light text-center pt-20 font-weight-bold'>Welcome!</h1>
                <h2 className='text-center'> I code stuff.</h2>
            </div>
            <div className='text-center'>
                <img src={Avatar} alt="personal avi" id="emoji" />
            </div>
            <div className='text-light text-left'>
                <p>
                    Originally from Maryland, I relocated to Queens, NY to pursue an undergraduate degree in economics at St. John's University. After graduating I began my career in finance.
                    For the last 7 years I have worked in asset management. In 2021, I decided it was time for a change and began my journey as a full stack developer. I recently received a certficate from Rutger's
                    University Coding Bootcamp. I have gained many skills in HTML, CSS, Javascript, Node.js, and the MERN stack.
                </p>
                <p>
                    As a full stack web develop I enjoy collaborating, problem solving, and simply creating applications. Coding allows me to be innovative and creative while still honing in on technical skills.
                    My portfolio highlights the immense amount of technologies and skills I have acquired. Thank you for checking out my portfolio!
                </p>
            </div>
        </section>
    )
}

export default About;