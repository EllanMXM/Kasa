import React from 'react'
import Data from '../../data/data.json'
import './logements.css'
import Location from '../../components/location/Location';

function Logements() {
  return (
    <div className='logements'>
      {Data.map(({ id, title, cover }) => (
        <Location
          id={id}
          title={title}
          cover={cover}
        />
      ))}
    </div>
  )
}

export default Logements;