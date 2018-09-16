import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {

    var styleNav = {fontWeight: 'bold', borderBottom: '1px solid rgb(80, 80, 80)'};
    var styleDrawer = {background: 'rgb(80, 80, 80)', color: 'white'}
    var navDrawerClass = [props.showDrawer === true ? 'nav-drawer-show' : 'nav-drawer-hide', 'nav-drawer'];

    return(
        <div className = 'nav'>


        <h1 className = 'nav-heading'>
            <i className="far fa-newspaper"></i> News Aggregator
            <span class = 'small'>Powered by News API</span>
        </h1>
        
        <div className = 'nav-links'>
            <NavLink activeStyle = {styleNav} className = 'nav-link' to = '/home'>Home</NavLink>
            <NavLink activeStyle = {styleNav} className = 'nav-link' to = '/topics'>Topics</NavLink>
            <NavLink activeStyle = {styleNav} className = 'nav-link' to = '/about'>About</NavLink>
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

            <div className = 'drawer-links'>
                <NavLink onClick = { () => {props.toggleDrawer()}} activeStyle = {styleDrawer} className = 'drawer-link' to = '/home'>Home</NavLink>
                <NavLink onClick = { () => {props.toggleDrawer()}} activeStyle = {styleDrawer} className = 'drawer-link' to = '/topics'>Topics</NavLink>
                <NavLink onClick = { () => {props.toggleDrawer()}} activeStyle = {styleDrawer} className = 'drawer-link' to = '/about'>About</NavLink>
            </div>
        </div>

        </div>
    )
}

export default Nav;