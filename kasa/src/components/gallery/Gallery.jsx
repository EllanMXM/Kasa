import React from 'react';
import Card from '../card/Card';
import data from '../../data/data.json'
import './gallery.css'

function Gallery() {
    return (
        <div className='gallery'>
            {data.map(data => { /*'MAP' EST UTILISEE POUR ITERER CHAQUE ELEMENT DE 'DATA' */
                return (
            <Card /*PROPRIETE DE CARD */
                key={data.id}
                id={data.id}
                title={data.title}
                cover={data.cover}
                />
                )})}
        </div>
    )
}

export default Gallery;