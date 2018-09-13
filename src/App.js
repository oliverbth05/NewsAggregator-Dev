import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

import {BrowserRouter, Route, NavLink} from 'react-router-dom';


import Article from './components/Article';
import Nav from './components/Nav';
import Spinner from './components/Spinner';

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

  searchQueryHandler(e) {
    this.setState({
      searchQuery: e.target.value
    })
  }

  refreshFeed() {
    this.setState({
      loading: true
    })
    axios.get('https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
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

    axios.get('https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
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
  
  render() {

    var articlesMapped = this.state.articles.map(article => {
      return ( 
        <Article link = {article.url} date = {new moment(article.publishedAt).format('M-DD-YY HH:MM ')} source = {article.source.name} img = {article.urlToImage } title = {article.title} description = {article.description} />
      )
    })

    return (
      <BrowserRouter>
      <div className="App">
        <Nav toggleDrawer = {this.toggleDrawer.bind(this)}  showDrawer = {this.state.showDrawer} searchArticles = {this.searchArticles.bind(this)} searchQueryHandler = {this.searchQueryHandler.bind(this)} searchQuery = {this.state.searchQuery} refresh = {this.refreshFeed.bind(this)} loading = {this.state.loading} />
        
        { this.state.loading ?
          <Spinner />  
        :
          <ul className = 'article-container'>
            {articlesMapped}
          </ul>
        }
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
