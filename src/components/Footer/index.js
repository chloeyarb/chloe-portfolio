import React from 'react';
import LI from '../../assets/images/LI.png';
import GH from '../../assets/images/GitHub-Mark.png';

function Footer() {
    return (
        <footer>
            <div>
                <p>
                    <a href="https://github.com/">
                        <img src={GH} alt='git logo' style={{width: '5%'}} />
                    </a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/chloe-yarborough-5a3575165/">
                        <img src={LI} alt='linked in logo' style={{width: '5%'}} />
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;