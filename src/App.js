import React, { Component } from 'react';
import { connect } from 'react-redux';

import {BrowserRouter, Route} from 'react-router-dom';


import Nav from './components/Nav';


import Home from './pages/Home';
import Search from './pages/Search';
import Categories from './pages/Categories';
import CategoriesSearch from './pages/CategoriesSearch';
import SearchAdvanced from './pages/SearchAdvanced';
import Sources from './pages/Sources';
import SourcesSearch from './pages/SourcesSearch';

import './main.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      windowWidth: window.innerWidth,
      showDrawer: false,
      searchKeyword: ''
    }

  }
  

  
  async updateWidth(){ //Monitors window width and minimizes drawer at > 900px
    await this.setState({
      windowWidth: window.innerWidth
    })

    if (this.state.windowWidth > 900) {
      this.setState({
        showDrawer: false
      })
    }
  }

  toggleDrawer() {
    this.setState({
      showDrawer: !this.state.showDrawer
    })
  }

  closeDrawer() {
    this.setState({
      showDrawer: false
    })
  }

  componentWillMount() {
    window.addEventListener('resize', this.updateWidth.bind(this))
    
  }
  
  componentDidMount() {
    
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav closeDrawer = {this.closeDrawer.bind(this)} toggleDrawer = {this.toggleDrawer.bind(this)}  showDrawer = {this.state.showDrawer} />
          <Route path = '/home' component = {Home} />
          <Route path = '/search/:id' component = {Search} />
          <Route path = '/advanced' component = {SearchAdvanced} />
          <Route exact path = '/categories' component = {Categories} />
          <Route path = '/categories/:id' component = {CategoriesSearch} />
          <Route exact path = '/sources' component = {Sources} />
          <Route path = '/sources/:id' component = {SourcesSearch} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    loading: state.loading,
    redirect: state.redirect,
    searchKeyword: state.searchKeyword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
