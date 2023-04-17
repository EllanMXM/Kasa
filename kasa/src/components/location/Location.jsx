import React from 'react';
import { useParams } from 'react-router-dom';
import Fleche from '../../components/fleche/Fleche';
import Tag from '../tag/LocationTag';
import Rating from '../rate/Rate';
import Collapse from '../../components/collapse/Collapse';
import data  from '../../data/data.json';
import Footer from '../footer/Footer'
import './location.css';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

function Location() {
    // RECUPERATION DES DONNEES DATA PAR ID POUR FICHE LOGEMENTS
    let {id} = useParams()
    const location = data.find(location => location.id === id);
    if (!location) 
    return <ErrorPage />;

    return (   
        <div>   
        <div className='locationContainer'>
            <div className='containerSlides'>
                <Fleche image={location.pictures} />
            </div>
            <div className='location'>
                <div className='locationInfo'>
                    <div className='locationTitle'>{location.title}</div>
                        <p className='locationLocalisation'>{location.location}</p>
                        <div className='locationTags'>
                            {location.tags.map(tag => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>    
                    <div className='containerHost'>
                        <div className='namePict'>
                            <p className='hostName'>{location.host.name}</p>
                            <img className='profil' src={location.host.picture} alt=''/>
                        </div>
                        <Rating className='locationRating' ratingValue={location.rating} />
                    </div>
                </div>
            <div className='locationCollapse'>
                <div className='locationCollapse__div'>
                    <Collapse className='descriptionCollapse' title="Description" description={location.description} />
                </div>
                <div className='locationCollapse__div'>
                    <Collapse className='equipmentCollapse' title="Équipements" description={
                        <ul>{location.equipments.map(equipments => (
                            <li key={equipments}>{equipments}</li>
                        ))}
                        </ul>
                    }
                    />
                </div>
            </div>  
            
        </div>
        <div>
<Footer/> 
        </div>
        </div> 
    
    )
}

export default Location;