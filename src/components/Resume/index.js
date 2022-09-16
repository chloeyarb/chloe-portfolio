import React from 'react';

function Resume() {
    return (
        <section>
            <div className='text-center'>
                <a id='resume-link' className='btn'
                href='https://drive.google.com/file/d/1XNsDqriTUCP4NYyFz7m5bhBxgIuSRNl5/view?usp=sharing'>

                    <button id='resume-header' className='text-black'> Resume</button>
                </a>
            </div>

            <div id='resume-list' className='text-center text-light'>
                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    {/* <li>Javascript</li> */}
                    <li>React</li>
                    {/* <li>Bootstrap</li> */}
                </ul>
                <br></br>
                <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>Node.js</li>
                    {/* <li>Express</li> */}
                    <li>RESTful API</li>
                    <li>MongoDB</li>
                </ul>
                <br></br>
                {/* <h3>Database Proficiencies</h3>
                <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Sequelize</li>
                    <li>GraphQl</li>
                    <li>Mongoose</li>
                    <li>NoSQL</li>
                </ul> */}
            </div>
        </section>
    )
};

export default Resume;