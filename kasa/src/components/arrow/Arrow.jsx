import React, { useState } from 'react';
import { useParams, Navigate } from "react-router-dom";
import JSON from '../../data/data.json'
import './arrow.css';
import droite from '../../assets/Droite.png'
import gauche from '../../assets/Gauche.png'

function Slideshow () {
    const [current, setCurrent] = useState(0);
    const urlParams = useParams();
    const logementData = JSON.filter((data) => data.id === urlParams.id);
    const lengthArray = logementData.map((data) => data.pictures.length);
    
    if (logementData === []) {
        return <Navigate to="*" />;
    }
    function nextSlide () {
        setCurrent(current === lengthArray - 1 ? 0 : current + 1);
    };
    function prevSlide () {
        setCurrent(current === 0 ? lengthArray - 1 : current - 1);
    };

    return (
    <>
        {logementData &&
        logementData.map((location, index, id) => (
            <div className="show" key={`${index}-${location.id}`}>
                <div className="slides-wrapper">
                    <div className="slides">
                        {location.pictures.map((picture, index) => (
                            <div className={index === current ? "slide active" : "slide"} key={index}>
                                {index === current && (
                                    <img className="imageSlide" src={picture} alt={location.title} key={`${index}-${id}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <img className={lengthArray > 1 ? "arrow-left" : "hide"} 
                src={gauche} alt="left arrow" key={`${index}-${id}-arrow-left`} onClick={prevSlide} />

                <img className={lengthArray > 1 ? "arrow-right" : "hide"}
                src={droite} alt="right arrow" key={`${index}-${id}-arrow-right`} onClick={nextSlide} />

                <div className="page">
                    {current + 1}/{lengthArray}
                </div>
            </div>
        ))}
    </>
    );
}
export default Slideshow ;