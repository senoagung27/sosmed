import { SET_POST_DATA, SET_TITLEPOST, SET_BODYPOST, FETCH_POST } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            return action.payload.data
        case SET_POST_DATA:
            return action.payload
        case SET_BODYPOST:
            return { ...state, body: action.payload }
        case SET_TITLEPOST:
            return { ...state, title: action.payload }
        default:
            return state
    }
}