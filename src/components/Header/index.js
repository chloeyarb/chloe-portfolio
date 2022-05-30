import React from 'react';
import Nav from '../Nav';
import Banner from '../../assets/images/Portfolio Banner.png';

function Header () {
    return (
        <header>
            <Nav />
            <div className='hero'>
            <img src={Banner} alt="" style={{ width: '30%'}}/>
            </div>
        </header>

    );
}

export default Header;
