import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Arrow from '../../components/arrow/Arrow';
import Tag from '../tag/LocationTag';
import Rating from '../rate/Rate';
import Collapse from '../../components/collapse/Collapse';
import data from '../../data/data.json';
import Footer from '../footer/Footer';
import './location.css';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

function Location() {
  const { id } = useParams();
  const location = data.find((location) => location.id === id);

  useEffect(() => {
    if (location) {
      document.title = 'Kasa - ' + location.title;
    }
  }, [location]);

  if (!location) return <ErrorPage />;

  return (
    <div>
      <div className='locationContainer'>
        <div className='containerSlides'>
          <Arrow image={location.pictures} />
        </div>
        <div className='location'>
          <div className='locationInfo'>
            <h1 className='locationTitle'>{location.title}</h1>
            <p className='locationLocalisation'>{location.location}</p>
            <div className='locationTags'>
              {location.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className='containerHost'>
            <div className='namePict'>
              <p className='hostName'>{location.host.name}</p>
              <img className='profil' src={location.host.picture} alt='' />
            </div>
            <Rating className='locationRating' ratingValue={location.rating} />
          </div>
        </div>
        <div className='locationCollapse'>
          <Collapse
            className='descriptionCollapse'
            title='Description'
            description={location.description}
          />
          <Collapse
            className='equipmentCollapse'
            title='Équipements'
            description={
              <ul>
                {location.equipments.map((equipments) => (
                  <li key={equipments}>{equipments}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Location;
