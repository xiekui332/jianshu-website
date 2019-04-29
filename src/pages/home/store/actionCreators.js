
import axios from 'axios';
import * as constants from './constants'

// 获取home页数据
export const changeHomeData = () => {
    // react-thunk可以返回一个函数
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res) => {
            if(res.status === 200){
                let result = res.data.data
                let action = {
                    type:constants.CHANGE_HOEM_DATA,
                    list:result
                }
                dispatch(action)
            }
        })
        .catch((err) => {

        })
    }
}

// 加载更多
export const loadMoreData = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json')
        .then((res) => {
            if(res.status === 200){
                let result = res.data.data
                let action = {
                    type:constants.ADD_HOEM_DATA,
                    list:result
                }
                dispatch(action)
            }
        })
        .catch((err) => {

        })
    }
}