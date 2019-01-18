import { FETCH_ALBUM } from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_ALBUM:
            return action.payload.data
        default:
            return state
    }
}