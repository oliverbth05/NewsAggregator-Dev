import React from 'react'
import Spinner from '../components/Spinner';
import Article from '../components/Article';
import axios from 'axios';
import ArticleError from '../components/ArticleError';

class Home extends React.Component {

    signal = axios.CancelToken.source();

    state = {
        articles: [],
        loading: true,
        error: false
    }

    fetchArticles() {
        let url = 'https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&pageSize=20&apiKey=be30cb8ae9f64953b5b256a3c8b4df07';
        axios.get(url, { cancelToken: this.signal.token })
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: true,
                    loading: false
                })
            })
    }

    componentDidMount() {
        this.fetchArticles();
    }

    componentUnmount() {
        this.signal.cancel('Leaving page')
    }

    renderArticles = articles => articles.map((article, index) => <Article key={index} {...article} />)

    render() {
        if (this.state.error) return <ArticleError />
        if (this.state.loading) return <Spinner />
        return (
            <div className='container-fluid'>
                <p className='banner'>Showing {this.state.articles.length} results for: Top Headlines</p>
                <ul className='article-container'>
                    {this.renderArticles(this.state.articles)}
                </ul>
            </div>
        )
    }

}

export default Home