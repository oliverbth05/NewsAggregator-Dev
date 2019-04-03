import React from 'react';
import { Link } from 'react-router-dom';

const SourceListItem = ({ id, name }) =>
    <li className='source-filter__item'>
        <Link className='source-filter__link' to={'/sources/' + id}>{name}</Link>
    </li>

export default SourceListItem