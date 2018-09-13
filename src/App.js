import React, { Component } from 'react';
import axios from 'axios';


import {BrowserRouter, Route, NavLink} from 'react-router-dom';


import Nav from './components/Nav';
import Spinner from './components/Spinner';

import Home from './pages/Home';

import './main.css';
class App extends Component {
  
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: true,
      windowWidth: window.innerWidth,
      searchQuery: null,
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



  

  searchArticles(e) {
    e.preventDefault();

    this.setState({
      loading:true
    })

    axios.get('https://newsapi.org/v2/everything?' +
    'q=' + this.state.searchQuery + '&' +
    'pageSize=100&' +
    'apiKey=be30cb8ae9f64953b5b256a3c8b4df07')
    .then((response) => {
      this.setState({
        loading: false,
        articles: response.data.articles,
      
      })
    })
    .catch((err) => {
      console.log(err)
    })


  }

  componentWillMount() {

    window.addEventListener('resize', this.updateWidth.bind(this))

  }
  
  render() {

   

    return (
      <BrowserRouter>
      <div className="App">
        <Nav toggleDrawer = {this.toggleDrawer.bind(this)}  showDrawer = {this.state.showDrawer} loading = {this.state.loading} />
        <Route path = '/home' component = {Home} />
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
