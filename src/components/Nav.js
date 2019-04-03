import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class Nav extends Component {

    state = {
        searchField: ''
    }

    searchFieldHandler(e) {
        this.setState({
            searchField: e.target.value
        })
    }

    searchSubmit(e) {
        e.preventDefault();
        this.props.closeDrawer();
        this.props.history.push('/search/' + this.state.searchField);
    }

    render() {
        var styleDrawer = { background: 'rgb(50, 50, 50)', color: 'white' }
        var navDrawerClass = [this.props.showDrawer === true ? 'nav-drawer-show' : 'nav-drawer-hide', 'nav-drawer'];

        return (
            <nav className='nav'>

                <div className='nav__heading'>
                    <h5 className='text-center font-normal'><i className="far fa-newspaper"></i> News Aggregator</h5>
                    <p className='text-center font-light font-small'>Powered by News API</p>
                </div>

                <div className='nav__links'>
                    <NavLink exact activeClassName={'nav__link-active'} className='nav__link' to='/'>Home</NavLink>
                    <NavLink activeClassName={'nav__link-active'} className='nav__link' to='/categories'>Categories</NavLink>
                    <NavLink activeClassName={'nav__link-active'} className='nav__link' to='/sources'>Sources</NavLink>
                    <NavLink activeClassName={'nav__link-active'} className='nav__link' to='/about'>About</NavLink>
                </div>

                <form className='nav__search' onSubmit={this.searchSubmit.bind(this)} >
                    <input placeholder='Search Keywords' onChange={this.searchFieldHandler.bind(this)} />
                    <button type='submit'><i className="fas fa-search"></i></button>
                </form>

                <button className='mobile-btn' onClick={() => { this.props.toggleDrawer() }}>
                    <i className="fas fa-bars"></i>
                </button>

                <div className={navDrawerClass.join(' ')} >

                    <form className='search-container-sm' onSubmit={this.searchSubmit.bind(this)} >
                        <input placeholder='Search Keywords' onChange={this.searchFieldHandler.bind(this)} />
                        <button type='submit'> <i className="fas fa-search"></i></button>
                    </form>

                    <div className='drawer-links'>
                        <NavLink exact onClick={() => { this.props.toggleDrawer() }} activeStyle={styleDrawer} className='drawer-link' to='/'>Home</NavLink>
                        <NavLink onClick={() => { this.props.toggleDrawer() }} activeStyle={styleDrawer} className='drawer-link' to='/advanced'>Advanced Search</NavLink>
                        <NavLink onClick={() => { this.props.toggleDrawer() }} activeStyle={styleDrawer} className='drawer-link' to='/categories'>Categories</NavLink>
                        <NavLink onClick={() => { this.props.toggleDrawer() }} activeStyle={styleDrawer} className='drawer-link' to='/sources'>Sources</NavLink>
                        <NavLink onClick={() => { this.props.toggleDrawer() }} activeStyle={styleDrawer} className='drawer-link' to='/about'>About</NavLink>
                    </div>

                </div>

            </nav> 
        )
    }

}

export default withRouter(Nav);