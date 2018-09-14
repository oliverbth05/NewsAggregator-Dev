const initialState = {
    articles: []
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

    }

    return state
}

export default reducer;