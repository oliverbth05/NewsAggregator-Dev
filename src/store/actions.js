import axios from 'axios';

export const loadSourcesAsync = () => {
    return dispatch => {
        axios.get('https://newsapi.org/v2/sources?apiKey=be30cb8ae9f64953b5b256a3c8b4df07')
        .then(response => {
            dispatch(loadSources(response.data.sources))
        })
    }
}

const loadSources = (sources) => {
    return {
        type: 'LOAD_SOURCES',
        payload: sources
    }
}

export const loadSearchArticlesAsync = (endPoint) => {
    return dispatch => {
        dispatch(loading());
        
        axios.get(endPoint)
        .then(response => {
            console.log(response);
            dispatch(loadSearchArticles(response.data.articles))
        })
        
        .catch(response => {
            dispatch(serverError(response))
        })
        
    }
}


export const loadArticlesAsync = (endPoint) => {
    return dispatch => {
        dispatch(loading());

        axios.get(endPoint)
        .then(response => {
            console.log(response)
            dispatch(loadArticles(response.data.articles))
        })
        .catch(response => {
            dispatch(serverError(response))
        })
    }
}

const loadArticles = (articles) => {
    return {
        type: 'LOAD_ARTICLES',
        payload: articles
    }
}

const loadSearchArticles = (articles) => {
    return {
        type: 'LOAD_SEARCH_ARTICLES',
        payload: articles
    }
}

const loading = () => {
    return {
        type: 'LOADING'
    }
}

const serverError = (error) => {
    return {
        type: 'SERVER_ERROR',
        payload: error
    }
}
