import React from 'react';
import Avatar from '../../assets/images/Avatar.png'; 

function About() {

    return (
        <section id="about-section">
            <div>
            <h1 id="about">About Me</h1>
            </div>
            <div>
                <img src={Avatar} alt="personal avi" style={{width: "15%"}} />
                <p>
                    Originally from Maryland, I relocated to Queens, NY to pursue an undergraduate degree in economics at St. John's University. After graduating I began my career in finance. 
                    For the last 7 years I have worked in asset management. In 2021, I decided it was time for a change and began my journey as a full stack developer and enrolled in a coding bootcamp
                    at Rutger's University. I have gained new skills in CSS, HTML, Javascript, and the MERN stack. I enjoy both the creative and technical components in the world of coding. My portfolio highlights
                    the emmense amount of technologies and skills I have acquired. Thank you for checking out my portfolio! 
                </p>
            </div>
        </section>
    )
}

export default About;