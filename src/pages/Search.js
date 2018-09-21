import React, { Component } from 'react'
import Spinner from '../components/Spinner';
import Article from '../components/Article';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { loadArticlesAsync } from '../store/actions';

class Search extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        var url = 
        'https://newsapi.org/v2/everything?q=' + this.props.match.params.id + 
        '&sortBy=relevancy' +
        '&apiKey=be30cb8ae9f64953b5b256a3c8b4df07'
        this.props.loadArticles(url);
    }
    
    
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            var url = 'https://newsapi.org/v2/top-headlines?q=' + this.props.match.params.id + '&apiKey=be30cb8ae9f64953b5b256a3c8b4df07'
            this.props.loadArticles(url);
        }
    }

    
    render() {
        var articlesMapped = this.props.articles.map(article => {

          var date = new moment(article.publishedAt).format('MM-DD-YYYY')
                        
            return ( 
                <Article date = {date} link = {article.url} source = {article.source.name} img = {article.urlToImage } title = {article.title} description = {article.description} />
            )
        })

    return (
        <div className = 'page-container'>
            <h1 className = 'article-results'>Showing  {this.props.articles.length} results for: {this.props.match.params.id}</h1>
            { this.props.loading ? 
                <Spinner error = {this.props.error} />
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
      loading: state.loading,
      error: state.error
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      loadArticles: (endPoint) => { dispatch(loadArticlesAsync(endPoint))}
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);