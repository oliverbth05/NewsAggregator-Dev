import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {

   

    var navDrawerClass = [props.showDrawer ? 'nav-drawer-show' : 'nav-drawer-hide', 'nav-drawer'];

    return(
        <div className = 'nav'>


        <h1 className = 'nav-heading'>
            <i className="far fa-newspaper"></i> News Aggregator
            <span class = 'small'>Powered by News API</span>
        </h1>
        
        <div className = 'nav-links'>
            <NavLink className = 'nav-link' to = '/home'>Home</NavLink>
            <NavLink className = 'nav-link' to = '/topics'>Topics</NavLink>
            <NavLink className = 'nav-link' to = '/about'>About</NavLink>
        </div>
        

        <form onSubmit = {props.searchArticles} className = 'search-container'>
            <input onChange = {props.searchQueryHandler} placeholder = 'Search Keywords' />
            <button type = 'submit'> <i class="fas fa-search"></i></button>
        </form>

        <button className = 'mobile-btn' onClick = { () => {props.toggleDrawer()}}>
        <i class="fas fa-bars"></i>
        </button>

        <div className = {navDrawerClass.join(' ')} >
            <form  className = 'search-container-sm'>
                <input placeholder = 'Search Keywords' />
                <button type = 'submit'> <i class="fas fa-search"></i></button>
            </form>
        </div>

        </div>
    )
}

export default Nav;