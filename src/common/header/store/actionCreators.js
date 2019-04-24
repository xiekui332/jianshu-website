import { constants }  from './index'
import axios from 'axios'
import { fromJS } from 'immutable'


const changeList = (data) => ({
    type:constants.CHANFE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)
});

export const setPage = (page) => ({ 
    type:constants.SET_PAGE,
    page
});

export const searchFocus = () => ({ 
    type: constants.SEARCH_FOCUS,
    focused:true
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR,
    focused:false
});

// 鼠标移入热门搜所得展示
export const changeEnter = () => ({
    type: constants.CHANGE_ENTER,
    mouseEnter:true
});

// 鼠标移出热门搜所得展示
export const changeLeave = () => ({
    type: constants.CHANGE_LEAVE,
    mouseEnter:false
});


export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
        .then((res) => {
            const data = res.data;
            console.log(data)
            if(data.success === true){
                dispatch(changeList(data.data))
            }else{
                console.log('request error')
            }
            
        })
        .catch((err) => {
            console.log(err)
        })
    }
};

// 修改旋转度数
export const addCount = (count) => ({
    type: constants.ADD_COUNT,
    count
});