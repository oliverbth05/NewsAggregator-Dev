const initialState = {
    articles: [],
    error: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
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