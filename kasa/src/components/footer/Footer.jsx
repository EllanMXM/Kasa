import React from 'react';
import Logo from '../../assets/LOGOFOOTER.png'
import footer from './footer.css'

function Footer() {
    return (
        <footer className={footer.footer}>
        <div className='container'>
            <img src={Logo} alt='Logo Kasa' className='logo'></img>
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
    )
}

export default Footer;