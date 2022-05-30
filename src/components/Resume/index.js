import React from 'react';

function Resume() {
    return (
        <section>
            <h2> Check out my resume!</h2>

            <div class='resume-section'>
                <h3>Front-End Proficiencies</h3>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ol>
                <br></br>
                <h3>Back-End Proficiencies</h3>
                <ol>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>API's</li>
                    <li>REST</li>
                    <li>MVC</li>
                </ol>
                <br></br>
                <h3>Database Proficiencies</h3>
                <ol>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>GraphQl</li>
                    <li>Mongoose</li>
                    <li>NoSQL</li>
                </ol>
            </div>
        </section>
    )
};

export default Resume;