import { LOAD_POST_FAIL, LOAD_POST_START, LOAD_POST_SUCCESS } from "./Constants"

const INITIAL_STATE = {
    loading: false,
    posts: '',
    errors: null,
}

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_POST_START: return {
            ...state, loading: true
        }
        case LOAD_POST_SUCCESS: return {
            ...state, loading: false, posts: action.payload
        }
        case LOAD_POST_FAIL: return {
            ...state, loading: false, errors: action.payload
        }
        default:
            return {
                state
            }
    }
}
export default appReducer