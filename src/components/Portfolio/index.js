import React from 'react';

function Portfolio() {
    return (
        <section>
            <div>
                <iframe src="https://giphy.com/embed/D5iPb2EoBCFd5CTcDe" width="480" height="238" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <h3 className='port-name'> MusicBox </h3>
                <h4> HTML / CSS / JavaScript</h4>
                <p>MusicBox is a search engine that allows users to be able to search lyrics to their favorite songs using the artist and song title.
                    Each song is accommodated with a gif of the artist. </p>
                <a href='https://chloeyarb.github.io/Music-Box/index.html' className='button'> Site </a>
                <a href='https://github.com/chloeyarb/Music-Box' className='button'> GitHub </a>  
            </div>
            <br></br>

            <div>
            <iframe src="https://giphy.com/embed/AHe9WdURxlnnjb6G6G" width="480" height="245" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <h3 className='port-name'> PodFreaks </h3>
                <h4>JavaScript / Express.js/ Handlebars / MySQL</h4>
                <p> PodFreaks is an easy to use podcast forum where users explore and comment on their favorite podcasts.</p>
                <a href='https://evening-tor-85614.herokuapp.com/' className='button'> Site </a>
                <a href='https://github.com/NicoleBarranca/PodFreaks' className='button'> GitHub </a>  
            </div>
            <br></br>

            <div>
            <iframe src="https://giphy.com/embed/wMcQPdOWdXmmq5fPgw" width="480" height="236" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <h3 className='port-name'> Book Search </h3>
                <h4> React / Node.js / Express.js / MongoDB</h4>
                <p> This application is a book search engine that uses the Google Books API. The user can search, explore, and save their favorite books.</p>
                <a href='https://desolate-ravine-45149.herokuapp.com/' className='button'> Site </a>
                <a href='https://github.com/chloeyarb/Book-Search-Engine' className='button'> GitHub </a>  
            </div>
            <br></br>

            <div>
                <iframe src="https://giphy.com/embed/X3I0P0iRQsfNXOwN1s" width="480" height="176" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <h3 className='port-name'> Note Taker </h3>
                <h4> JavaScript / Express.js / Node.js</h4>
                <p> The Note Taker app allows users to create, delete, and their notes.</p>
                <a href='https://guarded-ocean-94585.herokuapp.com/' className='button'> Site </a>
                <a href='https://github.com/chloeyarb/Note-Taker' className='button'> GitHub </a>  
            </div>
            <br></br>

            <div>
            <iframe src="https://giphy.com/embed/fNJxSx9bTwC2JF60Mg" width="480" height="208" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <h3 className='port-name'> Harry Potter Quiz </h3>
                <h4> HTML / CSS / JavaScript</h4>
                <p> The Harry Potter Quiz is a timed quiz that presents the user with questions and if they get one wrong the time runs out faster!</p>
                <a href='https://chloeyarb.github.io/Challenge-4-Quiz/' className='button'> Site </a>
                <a href='https://github.com/chloeyarb/Challenge-4-Quiz' className='button'> GitHub </a>  
            </div>
            <br></br>

            <div>
            <iframe src="https://giphy.com/embed/Nu9bB08jqnoRTCS7EC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <h3 className='port-name'> Password Generator </h3>
                <h4> HTML / CSS / JavaScript</h4>
                <p>Password Generator allows user to generate a random password that meets length requirements at a click of a button.</p>
                <a href='https://chloeyarb.github.io/Challenge-3-Password/' className='button'> Site </a>
                <a href='https://github.com/chloeyarb/Challenge-3-Password' className='button'> GitHub </a>  
            </div>
        </section>

    )
}

export default Portfolio;