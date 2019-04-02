import axios from 'axios';

export const fetchSources = () => dispatch => { 
    axios.get('https://newsapi.org/v2/sources?apiKey=be30cb8ae9f64953b5b256a3c8b4df07')
    .then(response => {
        dispatch({
            type: 'FETCH_SOURCES',
            payload: response.data.sources
        })
    })
}

export const fetchArticles = (endPoint) => dispatch => {
    dispatch(loading());
    axios.get(endPoint)
    .then(response => {
        console.log(response.data)
        dispatch({
            type: 'FETCH_ARTICLES',
            payload: response.data.articles
        })
    })
    .catch(response => {
        dispatch(serverError(response))
    })
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
