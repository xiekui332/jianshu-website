import { constants }  from './index'
import { fromJS } from 'immutable'

// immutable 库
// immutavle 对象

const defaultState = fromJS({
    focused:false,
    list:[],
    mouseEnter:false,
    page:1,
    totalPage:1,
    count:1
})

 

export default (state = defaultState, action) => {
    // switch 
    switch(action.type){
        case constants.SEARCH_FOCUS:
        return state.set('focused', action.focused);
        case constants.SEARCH_BLUR:
        return state.set('focused', action.focused);
        case constants.CHANFE_LIST:
        return state.merge({
            'list':action.data,
            'totalPage':action.totalPage
        })
        // or state.set('list', action.data);
        case constants.CHANGE_ENTER:
        return state.set('mouseEnter', action.mouseEnter);
        case constants.CHANGE_LEAVE:
        return state.set('mouseEnter', action.mouseEnter);
        case constants.SET_PAGE:
        return state.set('page', action.page);
        case constants.ADD_COUNT:
        return state.set('count', action.count);
        default:
        return state;
    }

    // or

    // if(action.type === constants.SEARCH_FOCUS){
    //     // const newState = JSON.parse(JSON.stringify(state))
    //     // newState.focused = action.focused
    //     return state.set('focused', action.focused)
    // }

    // if(action.type === constants.SEARCH_BLUR){
    //     // const newState = JSON.parse(JSON.stringify(state))
    //     // newState.focused = action.focused
    //     return state.set('focused', action.focused)
    // }

    // if(action.type === constants.CHANFE_LIST){
    //     // const newState = JSON.parse(JSON.stringify(state))
    //     // newState.focused = action.focused
    //     return state.set('list', action.data)
    // }
    // return state
}