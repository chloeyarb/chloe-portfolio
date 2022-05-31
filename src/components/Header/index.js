import React from 'react';
import Nav from '../Nav';
import Banner from '../../assets/images/Portfolio Banner.png';

function Header () {
    return (
        <div>
            <Nav />
            <div className='hero'>
            <img src={Banner} alt=""/>
            </div>
        </div>

    );
}

export default Header;
