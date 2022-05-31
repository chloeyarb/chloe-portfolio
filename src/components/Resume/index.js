import React from 'react';

function Resume() {
    return (
        <section>
            <h2 id='resume-header' className='text-center text-white'> Resume</h2>

            <div id='resume-list' className='text-center text-light'>
                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <br></br>
                <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>API's</li>
                    <li>REST</li>
                    <li>MVC</li>
                </ul>
                <br></br>
                <h3>Database Proficiencies</h3>
                <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>GraphQl</li>
                    <li>Mongoose</li>
                    <li>NoSQL</li>
                </ul>
            </div>
        </section>
    )
};

export default Resume;