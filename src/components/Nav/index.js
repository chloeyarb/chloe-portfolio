import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
            <Link to='/'>
                <h2 className='text-white'> Chloe Yarborough </h2>
            </Link>
            <nav className='nav-section'>
                <ul className='text-white'>
                    <li className='text-white'>
                        <Link to='/'> About Me </Link>
                    </li>
                    <li>
                        <Link to='/portfolio'> Portfolio </Link>
                    </li>
                    <li>
                        <Link to='/resume'>Resume</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Nav;