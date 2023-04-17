import React from 'react';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';

export default function Home(){
    
    return(
        <div> 
            <Banner />
            <Gallery/>
            <Footer />
        </div>
    )
}