import React from 'react';
import img from '../../assets/IMG.png'
import banner from './banner.css'

function Banner() {
    const title = 'Chez vous, partout et ailleurs'
    return (
    <section className={banner.section}>
        <div className='banner_home'>
            <img src={img} alt='montage' className='banner_img' />
            <p className='banner_title'>{title}</p>
        </div>
        
    </section>
    )
}

export default Banner;