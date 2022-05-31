import React from 'react';
import LI from '../../assets/images/LI.png';
import GH from '../../assets/images/GitHub-Mark.png';

function Footer() {
    return (
        <footer className='footer text-center'>
            <div>
                <p>
                    <a href="https://github.com/">
                        <img src={GH} alt='git logo' style={{ width: '70%' }} />
                    </a>
                </p>
            </div>
            <div>
                <p>
                    <a href="https://www.linkedin.com/in/chloe-yarborough-5a3575165/">
                        <img src={LI} alt='linked in logo' style={{ width: '10%' }} />
                    </a>
                </p>
            </div>
            <div>
                <p>
                    <a href="https://stackoverflow.com/users/17597428/chloe-yarborough?tab=profile">

                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;