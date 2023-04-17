import React from 'react';
import data from '../../data/data.json';
import starColor from '../../assets/star_color.png';
import starEmpty from '../../assets/star_empty.png';
import { useParams, Navigate } from "react-router-dom";
import './rate.css';

function Rate() {
    const { id } = useParams();
    const locationData = data.find(item => item.id === id);  // RECHERCHE L'EMPLACEMENT DANS LE TABLEAU 'DATA'

    if (!locationData) { // REDIRIGE L'UTILISATEUR VERS UNE PAGE ERREUR 
        return <Navigate to="*" />;
    }

    const { rating } = locationData;
    const stars = [1, 2, 3, 4, 5];

    const starImages = stars.map((star, index) => {
        const src = star < rating ? starColor : starEmpty; // DETERMINE L"ETOILE EN FONCTION DE L'EMPLACEMENT
        const alt = star < rating ? "full-star" : "empty-star";
        return <img key={`${index}-${star}`} src={src} alt={alt} className="star" />; // RETOURNE UNE IMG D'ETOILE AVEC UNE CLE UNIQUE
    });

    return ( // RETOURNE UN ELEMENT HTML CONTENANT LES ETOILES
        <div className="staring">
        {starImages}
        </div>
    );
}

export default Rate;
