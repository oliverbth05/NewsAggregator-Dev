import React, { Component } from 'react'
import Spinner from '../components/Spinner';
import Article from '../components/Article';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadArticlesAsync } from '../store/actions';

class Home extends Component {


    constructor(props){
        super(props);


    }

    

    componentDidMount(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=be30cb8ae9f64953b5b256a3c8b4df07'

        this.props.loadArticles(url)
    }
    

    render() {

        var articlesMapped = this.props.articles.map(article => {
            return ( 
                <Article link = {article.url} date = {new moment(article.publishedAt).format('M-DD-YY HH:MM ')} source = {article.source.name} img = {article.urlToImage } title = {article.title} description = {article.description} />
            )
        })


    return (
        <div>
            { this.props.loading ? 
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

const mapStateToProps = (state) => {
    return {
      articles: state.articles,
      loading: state.loading
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadArticles: (endPoint) => { dispatch(loadArticlesAsync(endPoint))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);