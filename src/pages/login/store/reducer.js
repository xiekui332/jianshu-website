import { fromJS } from "immutable"
import { constants } from './index'

const defaultState = fromJS({
    user:'',
    word:'',
    login:false
})

export default ((state = defaultState, action) => {
    switch(action.type){
        case constants.CHANGE_LOGIN:
        return state.set('login', action.status)
        case constants.CHANGE_LOGOUT:
        return state.set('login', action.status)
        default:
        return state
    }
})