import React from 'react'
import Spinner from '../components/Spinner';
import Article from '../components/Article';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchArticles } from '../store/actions';

class Home extends React.Component {

    componentDidMount(){
        var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'sortBy=popularity&' +
        'pageSize=20&' +
        'apiKey=be30cb8ae9f64953b5b256a3c8b4df07'
        this.props.fetchArticles(url)
    } 
    
    renderArticles = articles => articles.map(article => <Article {...article} />)
    
    render() {
        
        if (this.props.loading) return <Spinner error = {this.props.error} />
        
        return (
            <div className = 'page-container'>
                <p className = 'banner'>Showing {this.props.articles.length} results for: Top Headlines</p>
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

  export default connect(mapStateToProps, {fetchArticles})(Home);