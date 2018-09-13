import React, { Component } from 'react'
import Spinner from '../components/Spinner';
import Article from '../components/Article';
import moment from 'moment';
import axios from 'axios';

class Home extends Component {


    constructor(){
        super();

        this.state = {
            articles: [],
            loading: true
        }
    }

    

    componentWillMount(){
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
        <div>
        { this.state.loading ?
            <Spinner />  
        :
            <ul className = 'article-container'>
                {articlesMapped}
            </ul>
        }
        </div>
    )
  }
}

export default Home;