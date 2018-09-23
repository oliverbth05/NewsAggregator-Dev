import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './nav.css';
class Nav extends Component { 
    
    state = {
        searchField: ''
    }
    
    searchFieldHandler(e) {
        this.setState({
            searchField: e.target.value
        })
        
       
    }
    
    searchSubmit(e){
        e.preventDefault();
        this.props.closeDrawer();
        this.props.history.push('/search/' + this.state.searchField);
    }
    
    render() {
        var styleNav = {fontWeight: 'bold', borderBottom: '1px solid rgb(80, 80, 80)'};
        var styleDrawer = {background: 'rgb(50, 50, 50)', color: 'white'}
        var navDrawerClass = [this.props.showDrawer === true ? 'nav-drawer-show' : 'nav-drawer-hide', 'nav-drawer'];
        
        return(
            <div className = 'nav'>
    
    
            <h1 className = 'nav-heading'>
                <i className="far fa-newspaper"></i> News Aggregator
                <span className = 'small'>Powered by News API</span>
            </h1>
            
            <div className = 'nav-links'>
                <NavLink activeStyle = {styleNav} className = 'nav-link' to = '/home'>Home</NavLink>
                <NavLink activeStyle = {styleNav} className = 'nav-link' to = '/advanced'>Advanced Search</NavLink>
                <NavLink activeStyle = {styleNav} className = 'nav-link' to = '/categories'>Categories</NavLink>
                <NavLink activeStyle = {styleNav} className = 'nav-link' to = '/sources'>Sources</NavLink>
                <NavLink activeStyle = {styleNav} className = 'nav-link' to = '/about'>About</NavLink>
            </div>
            
    
            <form  className = 'search-container' onSubmit = {this.searchSubmit.bind(this)} >
                <input  placeholder = 'Search Keywords' onChange = {this.searchFieldHandler.bind(this)} />
                <button type = 'submit'> <i className="fas fa-search"></i></button>
            </form>
    
            <button className = 'mobile-btn' onClick = { () => {this.props.toggleDrawer()}}>
            <i className="fas fa-bars"></i>
            </button>
    
            <div className = {navDrawerClass.join(' ')} >
              
                <form  className = 'search-container-sm' onSubmit = {this.searchSubmit.bind(this)} >
                    <input placeholder = 'Search Keywords' onChange = {this.searchFieldHandler.bind(this)} />
                    <button type = 'submit'> <i className="fas fa-search"></i></button>
                </form>
                
                <div className = 'drawer-links'>
                    <NavLink onClick = { () => {this.props.toggleDrawer()}} activeStyle = {styleDrawer} className = 'drawer-link' to = '/home'>Home</NavLink>
                    <NavLink onClick = { () => {this.props.toggleDrawer()}} activeStyle = {styleDrawer} className = 'drawer-link' to = '/advanced'>Advanced Search</NavLink>
                    <NavLink onClick = { () => {this.props.toggleDrawer()}} activeStyle = {styleDrawer} className = 'drawer-link' to = '/categories'>Categories</NavLink>
                    <NavLink onClick = { () => {this.props.toggleDrawer()}} activeStyle = {styleDrawer} className = 'drawer-link' to = '/sources'>Sources</NavLink>
                    <NavLink onClick = { () => {this.props.toggleDrawer()}} activeStyle = {styleDrawer} className = 'drawer-link' to = '/about'>About</NavLink>
                </div>
                
                
            </div>
    
            </div>
    )
}

}

export default withRouter(Nav);