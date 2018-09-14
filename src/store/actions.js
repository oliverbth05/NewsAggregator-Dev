import axios from 'axios';

export const loadArticlesAsync = (endPoint) => {
    return dispatch => {
        dispatch(loading());

        axios.get(endPoint)
        .then(response => {
            dispatch(loadArticles(response.data.articles))
        })
    }
}

const loadArticles = (articles) => {
    return {
        type: 'LOAD_ARTICLES',
        payload: articles
    }
}

const loading = () => {
    return {
        type: 'LOADING'
    }
}