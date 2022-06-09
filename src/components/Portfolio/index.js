import React from 'react';

function Portfolio() {
    return (
        <div className='container mt-4 '>
            <h2 id="port-header" className='text-center text-white'> Portfolio</h2>
            <div className='row mb-4 mt-4'>
                <div className='col'>
                    <iframe src="https://giphy.com/embed/D5iPb2EoBCFd5CTcDe" width="480" height="238" frameBorder="0" class="giphy-embed" allowFullScreen title="gif"></iframe>
                    <h3 className='port-name text-light'> MusicBox </h3>
                    <h4 className='properties'> HTML / CSS / JavaScript</h4>
                    <p id="port-des">MusicBox is a search engine that allows users to be able to search lyrics to their favorite songs using the artist and song title.
                        Each song is accommodated with a gif of the artist. </p>
                    <a href='https://chloeyarb.github.io/Music-Box/index.html' className='btn' id='button'> Site </a>
                    <a href='https://github.com/chloeyarb/Music-Box' className='btn' id='button'> GitHub </a>
                </div>
                <br></br>

                <div className='col'>
                    <iframe src="https://giphy.com/embed/AHe9WdURxlnnjb6G6G" width="480" height="245" frameBorder="0" class="giphy-embed" allowFullScreen title="gif"></iframe>
                    <h3 className='port-name text-light'> PodFreaks </h3>
                    <h4 className='properties'>JavaScript / Express.js/ Handlebars / MySQL</h4>
                    <p id="port-des"> PodFreaks is an easy to use podcast forum where users explore and comment on their favorite podcasts.</p>
                    <a href='https://evening-tor-85614.herokuapp.com/' className='btn' id='button'> Site </a>
                    <a href='https://github.com/NicoleBarranca/PodFreaks' className='btn' id='button'> GitHub </a>
                </div>
            </div>
            <br></br>
            <div className='row mb-4'>
                <div className='col'>
                    <iframe src="https://giphy.com/embed/wMcQPdOWdXmmq5fPgw" width="480" height="236" frameBorder="0" class="giphy-embed" allowFullScreen title="gif"></iframe>
                    <h3 className='port-name text-light'> Book Search </h3>
                    <h4 className='properties'> React / Node.js / Express.js / MongoDB</h4>
                    <p id="port-des"> This application is a book search engine that uses the Google Books API. The user can search, explore, and save their favorite books.</p>
                    <a href='https://desolate-ravine-45149.herokuapp.com/' className='btn' id='button'> Site </a>
                    <a href='https://github.com/chloeyarb/Book-Search-Engine' className='btn' id='button'> GitHub </a>
                </div>
                <br></br>

                <div className='col'>
                    <iframe src="https://giphy.com/embed/X3I0P0iRQsfNXOwN1s" width="480" height="176" frameBorder="0" class="giphy-embed" allowFullScreen title="gif"></iframe>
                    <h3 className='port-name text-light'> Note Taker </h3>
                    <h4 className='properties'> JavaScript / Express.js / Node.js</h4>
                    <p id="port-des"> The Note Taker app allows users to create, delete, and their notes.</p>
                    <a href='https://guarded-ocean-94585.herokuapp.com/' className='btn' id='button'> Site </a>
                    <a href='https://github.com/chloeyarb/Note-Taker' className='btn' id='button'> GitHub </a>
                </div>
            </div>
            <br></br>
            <div className='row mb-4'>
                <div className='col'>
                    <iframe src="https://giphy.com/embed/fNJxSx9bTwC2JF60Mg" width="480" height="208" frameBorder="0" class="giphy-embed" allowFullScreen title="gif"></iframe>
                    <h3 className='port-name text-light'> Harry Potter Quiz </h3>
                    <h4 className='properties'> HTML / CSS / JavaScript</h4>
                    <p id="port-des"> The Harry Potter Quiz is a timed quiz that presents the user with questions and if they get one wrong the time runs out faster!</p>
                    <a href='https://chloeyarb.github.io/Challenge-4-Quiz/' className='btn' id='button'> Site </a>
                    <a href='https://github.com/chloeyarb/Challenge-4-Quiz' className='btn' id='button'> GitHub </a>
                </div>
                <br></br>

                <div className='col'>
                    <iframe src="https://giphy.com/embed/Nu9bB08jqnoRTCS7EC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen title="gif"></iframe>
                    <h3 className='port-name text-light'> Password Generator </h3>
                    <h4 className='properties'> HTML / CSS / JavaScript</h4>
                    <p id="port-des">Password Generator allows user to generate a random password that meets length requirements at a click of a button.</p>
                    <a href='https://chloeyarb.github.io/Challenge-3-Password/' className='btn mr-2' id='button'> Site </a>
                    <a href='https://github.com/chloeyarb/Challenge-3-Password' className='btn' id='button'> GitHub </a>
                </div>
            </div>

            <br></br>
            <div className='row mb-4'>
                <div className='col'>
                    <iframe src="https://giphy.com/embed/JCP0kkhtz9MlLoUDYH" width="480" height="233" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    <h3 className='port-name text-light'> WhateverNow </h3>
                    <h4 className='properties'> React / Express / MongoDB / Node.js / JavaScript</h4>
                    <p id="port-des"> WhateverNow is an easy to use social media application where users can create an account and have access to a feed of different posts by various users.</p>
                    <a href='https://whatever-now.herokuapp.com/' className='btn' id='button'> Site </a>
                    <a href='https://github.com/chloeyarb/Whatever-Now' className='btn' id='button'> GitHub </a>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;