import React, { Component } from 'react'
import Spinner from '../components/Spinner';
import Article from '../components/Article';
import ArticleError from '../components/ArticleError';

import axios from 'axios';


class SourcesSearch extends Component {

    signal = axios.CancelToken.source();

    fetchArticles() {
        var url = `https://newsapi.org/v2/top-headlines?sources=${this.props.match.params.id}&language=en&apiKey=be30cb8ae9f64953b5b256a3c8b4df07`
        axios.get(url, { cancelToken: this.signal.token })
            .then(res => {
                this.setState({
                    loading: false,
                    error: false,
                    articles: res.data.articles
                })
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: true,
                })
            })
    }

    state = {
        loading: true,
        error: false,
        articles: []
    }

    componentDidMount() {
        this.fetchArticles();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            var url = `https://newsapi.org/v2/top-headlines?sources=${this.props.match.params.id}&language=en&apiKey=be30cb8ae9f64953b5b256a3c8b4df07`
            this.fetchArticles(url);
        }
    }

    componentWillUnmount() {
        this.signal.cancel('Cancelled')
    }
    
    renderArticles = articles => articles.map((article, index) => <Article key={index} {...article} />)

    render() {
        if (this.state.error) return <ArticleError />
        if (this.state.loading) return <Spinner />

        return (
            <div className='container-fluid'>
                <p className='banner'>Showing  {this.state.articles.length} results for: {this.props.match.params.id}</p>
                <ul className='article-container'>
                    {this.renderArticles(this.state.articles)}
                </ul>
            </div>
        )
    }
}


export default SourcesSearch;