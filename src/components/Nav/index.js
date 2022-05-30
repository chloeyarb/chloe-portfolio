import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
            <Link to='/'>
                <h2> Chloe Yarborough </h2>
            </Link>
            <nav>
                <ul className='list-section'>
                    <li>
                        <Link to='/'> About Me </Link>
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