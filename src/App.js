import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import {BrowserRouter, Route, NavLink} from 'react-router-dom';


import Nav from './components/Nav';
import Spinner from './components/Spinner';

import Home from './pages/Home';

import './main.css';
class App extends Component {
  
  constructor() {
    super();

    this.state = {
      windowWidth: window.innerWidth,
      showDrawer: false
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

  componentWillMount() {
    window.addEventListener('resize', this.updateWidth.bind(this))
  }
  
  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <Nav toggleDrawer = {this.toggleDrawer.bind(this)}  showDrawer = {this.state.showDrawer} />
        <Route path = '/home' component = {Home} />
      
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
