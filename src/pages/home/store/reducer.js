
import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    topicList:[],

    articleList:[],

    // Recommend.js
    RecommendList:[],

    pages:0
})

const changeHomeData = (state, action) => {
    return state.merge({
        topicList:fromJS(state.toJS().topicList.concat(action.list.topicList)),
        articleList:fromJS(state.toJS().articleList.concat(action.list.articleList)),
        RecommendList:fromJS(state.toJS().RecommendList.concat(action.list.RecommendList)),
        pages:state.get('pages') + 1
    })
}

export default ((state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOEM_DATA:
        return changeHomeData(state, action)
        default:
        return state;
    }
})