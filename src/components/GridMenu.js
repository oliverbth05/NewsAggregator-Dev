import React from 'react';
import { Link } from 'react-router-dom';

import './gridmenu.css';

const GridMenu = () => {
    return (
        <div className='grid-menu'>
            <Link className='grid-link' to='/categories/business'><i class="fas fa-chart-line"></i> Business</Link>
            <Link className='grid-link' to='/categories/entertainment'><i class="fas fa-film"></i> Entertainment</Link>
            <Link className='grid-link' to='/categories/health'><i class="fas fa-briefcase-medical"></i> Health</Link>
            <Link className='grid-link' to='/categories/science'><i class="fas fa-flask"></i> Science</Link>
            <Link className='grid-link' to='/categories/sports'><i class="fas fa-football-ball"></i> Sports</Link>
            <Link className='grid-link' to='/categories/technology'><i class="fas fa-mobile-alt"></i> Technology</Link>
        </div>
    )
}

export default GridMenu;