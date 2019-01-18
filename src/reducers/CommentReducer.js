import { SET_COMMENT_DATA, SET_NAMECOMMENT, SET_BODYCOMMENT, SET_EMAILCOMMENT } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case SET_COMMENT_DATA:
            return action.payload
        case SET_NAMECOMMENT:
            return { ...state, name: action.payload }
        case SET_BODYCOMMENT:
            return { ...state, body: action.payload }
        case SET_EMAILCOMMENT:
            return { ...state, email: action.payload }
        default:
            return state
    }
}