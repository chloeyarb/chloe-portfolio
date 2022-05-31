import React from 'react';
import Nav from '../Nav';
import Banner from '../../assets/images/Portfolio Banner.png';

function Header () {
    return (
        <header>
            <Nav />
            <div className='hero'>
            <img src={Banner} alt=""/>
            </div>
        </header>

    );
}

export default Header;
