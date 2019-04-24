import { constants }  from './index'
import { fromJS } from 'immutable'

// immutable 库
// immutavle 对象

const defaultState = fromJS({
    focused:false,
    list:[]
})

 

export default (state = defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS){
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.focused = action.focused
        return state.set('focused', action.focused)
    }

    if(action.type === constants.SEARCH_BLUR){
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.focused = action.focused
        return state.set('focused', action.focused)
    }

    if(action.type === constants.CHANFE_LIST){
        // const newState = JSON.parse(JSON.stringify(state))
        // newState.focused = action.focused
        return state.set('list', action.data)
    }
    return state
}