const initialState = {
    articles: [],
    searchArticles: [],
    error: null,
    sources: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        
        case 'LOAD_SOURCES' :
            return {
                ...state,
                sources: action.payload
            }
        
        case 'LOAD_SEARCH_ARTICLES' :
            return {
                ...state,
                searchArticles: action.payload,
                loading: false
            }
        
        case 'LOAD_ARTICLES' :
            return {
                ...state,
                articles: action.payload,
                loading: false
            }
        case 'LOADING' :
            return {
                ...state,
                loading: true
            }
        
        case 'SERVER_ERROR' :
            return {
                ...state,
                error: action.payload.toString()
            }
        

    }

    return state
}

export default reducer;