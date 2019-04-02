import React from 'react'
import Spinner from '../components/Spinner';
import Article from '../components/Article';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchArticles } from '../store/actions';

class Search extends React.Component {

    componentDidMount(){
        var url = 
        'https://newsapi.org/v2/everything?q=' + this.props.match.params.id + 
        '&sortBy=relevancy' +
        '&apiKey=be30cb8ae9f64953b5b256a3c8b4df07'
        this.props.fetchArticles(url);
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            var url = 'https://newsapi.org/v2/top-headlines?q=' + this.props.match.params.id + '&apiKey=be30cb8ae9f64953b5b256a3c8b4df07'
            this.props.fetchArticles(url);
        }
    }
    
    renderArticles = articles =>articles.map(article => <Article {...article} />)
    
    render() {
        
        if (this.props.loading) return <Spinner error = {this.props.error} />
        
        return (
            <div className = 'page-container'>
                <p className = 'banner'>Showing {this.props.articles.length} results for: {this.props.match.params.id}</p>
                <ul className = 'article-container'>
                    {this.renderArticles(this.props.articles)}
                </ul>
            </div>
        )
   }
   
}

const mapStateToProps = state => ({
      articles: state.articles,
      loading: state.loading,
      error: state.error
})

export default connect(mapStateToProps, {fetchArticles})(Search);