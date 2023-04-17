import React from 'react';
import './locationtag.css';

function Tag(tags) {
    // RECUPERATION DES TAGS DES LOGEMENTS (PROPS)
    const tag = tags.tag

    return (
            <div className='tag'>{tag}</div>
    );
}

export default Tag;