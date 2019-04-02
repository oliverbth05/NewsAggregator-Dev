const initialState = {
    articles: [],
    searchArticles: [],
    error: null,
    sources: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case 'FETCH_SOURCES' :
            return {
                ...state,
                sources: action.payload
            }
        
        case 'FETCH_ARTICLES' :
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