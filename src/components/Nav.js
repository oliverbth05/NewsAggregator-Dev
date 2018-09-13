import React from 'react';

const Nav = (props) => {

    var refreshClass = 'refresh';

    if (props.loading) {
        refreshClass = 'refresh refresh-spinning';
    }

    var navDrawerClass = [props.showDrawer ? 'nav-drawer-show' : 'nav-drawer-hide', 'nav-drawer'];

    return(
        <div className = 'nav'>

        <button className = {refreshClass} onClick = { () => {props.refresh()}}><i class="fas fa-sync-alt"></i></button>
        <h1 className = 'nav-heading'>
        <i className="far fa-newspaper"></i> News Aggregator
        <span class = 'small'>Powered by News API</span>
        </h1>

        <form onSubmit = {props.searchArticles} className = 'search-container'>
            <input onChange = {props.searchQueryHandler} placeholder = 'Search Keywords' />
            <button type = 'submit'> <i class="fas fa-search"></i></button>
        </form>

        <button className = 'mobile-btn' onClick = { () => {props.toggleDrawer()}}>
        <i class="fas fa-bars"></i>
        </button>

        <div className = {navDrawerClass.join(' ')} >
            <form onSubmit = {props.searchArticles} className = 'search-container-sm'>
                <input onChange = {props.searchQueryHandler} placeholder = 'Search Keywords' />
                <button type = 'submit'> <i class="fas fa-search"></i></button>
            </form>
        </div>

        </div>
    )
}

export default Nav;