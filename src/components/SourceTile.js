import React from 'react';
import { Link } from 'react-router-dom';

const SourceTile = ({ name, image, url }) =>
    <Link to={`/sources/${url}`} className='source-grid-element'>
        <img src={image} alt = {name}/>
        <p>{name}</p>
    </Link>

export default SourceTile