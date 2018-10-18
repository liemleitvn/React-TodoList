import {SELECT_TASK} from '../actions/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_TASK:
            return action.payload
        default:
            return {};
    }
}