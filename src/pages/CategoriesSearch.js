import React from 'react'
import Spinner from '../components/Spinner';
import Article from '../components/Article';
import ArticleError from '../components/ArticleError';
import axios from 'axios';

class CategoriesSearch extends React.Component {

    signal = axios.CancelToken.source();

    state = {
        articles: [],
        loading: true,
        error: false
    }

    fetchArticles() {
        var url = `https://newsapi.org/v2/top-headlines?category=${this.props.match.params.id}&language=en&apiKey=be30cb8ae9f64953b5b256a3c8b4df07`
        axios.get(url, { cancelToken: this.signal.token })
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    loading: false,
                    error: false
                })
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    error: true
                })
            })
    }

    componentDidMount() {
        this.fetchArticles();
    }


    componentWillUnmount() {
        this.signal.cancel()
    }

    renderArticles = articles => articles.map((article, index) => <Article key = {index} {...article} />)

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

export default CategoriesSearch;