import React, { Component } from 'react';
import { loadSearchArticlesAsync } from '../store/actions';
import { connect } from 'react-redux';
import Article from '../components/Article';
import moment from 'moment';
import Spinner from '../components/Spinner';
import './searchadvanced.css';

class SearchAdvanced extends Component { //Fields: from/to, language, sortby, q, sources
    
    constructor(){
        super();
        
        this.state = {
            keyword: '',
            dateFrom: '',
            dateTo: '',
            language: 'en',
            sort: '',
            searchTerm: '',
            keywordError: false
        }
    }
    
    formChangeHandler(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }
    
    formSubmitHandler(e) {
        
        e.preventDefault();
        
        var keyword, 
            dateFrom,
            dateTo,
            language,
            sort
        
        keyword = this.state.keyword || null    
        dateFrom = this.state.dateForm || null
        dateTo = this.state.dateTo || null
        language = this.state.language || null
        sort = this.state.sort || null
        
        var url = 'https://newsapi.org/v2/everything?';
        
        if (keyword) {
            url += ('q=' + keyword)
        }
        
        else {
            return this.setState({
                keywordError: true
            })
        }
        
        if (dateFrom) {
            url += ('&from=' + new moment(dateFrom).format('YYYY-MM-DD'))
        }
        
        if (dateTo) {
            url += ('&to=' + new moment(dateTo).format('YYYY-MM-DD'))
        }
        
        if (language) {
            url += ('&language=' + language)
        }
        
        if (sort) {
            url += ('&sortBy=' + sort)
        }
        
        url += '&apiKey=be30cb8ae9f64953b5b256a3c8b4df07'
        console.log(url)
        this.props.loadSearchArticles(url)
        this.setState({
            searchTerm: keyword,
            keywordError: false
        })
     
    }
    
    render() {
        var articlesMapped
        if (this.props.articles ) {
            articlesMapped = this.props.articles.map(article => {
                var date = new moment(article.publishedAt).format('MM-DD-YYYY')
                return ( 
                <Article date = {date} link = {article.url} source = {article.source.name} img = {article.urlToImage } title = {article.title} description = {article.description} />
                )
            })
        }
        
        
        
        return (
            <div className = 'page-container'>
                <form className = 'search-form' onSubmit = {this.formSubmitHandler.bind(this)}>
                    <div className = 'search-form-section'>
                        <label>Keyword</label>
                        <input className = 'search-form-input' name = 'keyword' value = {this.state.keyword} onChange = {this.formChangeHandler.bind(this)}/>
                    </div>
                    
                    <div className = 'search-form-section'>
                        <label>Dates</label>
                        
                        <div className = 'search-form-section-date'>
                            <div className = 'section'>
                                <p>From</p>
                                <input className = 'search-form-date' type = 'date' name = 'dateFrom' value = {this.state.dateFrom} onChange = {this.formChangeHandler.bind(this)} />
                            </div>
                        
                            <div className = 'section'>
                                <p>To</p>
                                <input className = 'search-form-date' type = 'date' name = 'dateTo' value = {this.state.dateTo}  onChange = {this.formChangeHandler.bind(this)} />
                            </div>
                        </div>
                       
                    </div>
                    
                    <div className = 'search-form-section'>
                        <label>Language</label>
                        <select name = 'language' selected = 'English'  onChange = {this.formChangeHandler.bind(this)} >
                            <option value = 'en'>English</option>
                            <option value = 'es'>Spanish</option>
                            <option value = 'fr'>French</option>
                            <option value = 'ru'>Russian</option>
                        </select>
                    </div>
                    
                    <div className = 'search-form-section'>
                        <label>Sort By</label>
                        <input name = 'sort' className = 'search-form-radio' type="radio" value="relevancy"  onChange = {this.formChangeHandler.bind(this)} />Relevancy
                        <input name = 'sort' className = 'search-form-radio' type="radio" value="popularity"  onChange = {this.formChangeHandler.bind(this)} />Popularity
                        <input name = 'sort' className = 'search-form-radio' type="radio" value="publishDate"  onChange = {this.formChangeHandler.bind(this)} />Publish Date
                    </div>
                    
                    <div className = 'search-form-section'>
                        <button type = 'submit'>Search</button>
                    </div>
                    {this.state.keywordError ?
                    <p className = 'search-error'>*Please provide a keyword at minimum</p>
                    :
                    null}
                </form>
                
                <div className = 'article-container'>
                    { this.props.loading ? 
                        <Spinner error = {this.props.error} />
                    :
                        <div>
                        
                            <h1 className = 'article-results'>Showing {this.props.articles.length} results for: {this.state.searchTerm}</h1>
                            <ul className = 'article-container'>
                                {articlesMapped}
                            </ul>
                        </div>    
                    }
                </div>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.searchArticles,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadSearchArticles: (endPoint) => { dispatch(loadSearchArticlesAsync(endPoint)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAdvanced);