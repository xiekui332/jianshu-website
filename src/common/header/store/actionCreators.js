import { constants }  from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({ 
    type: constants.SEARCH_FOCUS,
    focused:true
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR,
    focused:false
});

const changeList = (data) => ({
    type:constants.CHANFE_LIST,
    data:fromJS(data)
})

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
}