import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header >
            <Link to='/' id='nav-header'>
                <h2 className='text-white' > Chloe Yarborough </h2>
            </Link>
            <nav className='nav-section'>
                <ul>
                    <li>
                        <Link id='nav-title' to='/'> About Me </Link>
                    </li>
                    <li>
                        <Link id='nav-title' to='/portfolio'> Portfolio </Link>
                    </li>
                    <li>
                        <Link id='nav-title' to='/resume'>Resume</Link>
                    </li>
                    <li>
                        <Link id='nav-title' to='/contact'>Contact </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Nav;