
import axios from 'axios';
import * as constants from './constants'

const changeLogin = (result) => ({
    type:constants.CHANGE_LOGIN,
    status:result
})

const changeLogout = () => ({
    type:constants.CHANGE_LOGOUT,
    status:false
})

export const login = (count, passWord) => {
    return (dispatch) => {
        axios.get('/api/login.json?count=' + count + '&passWord=' + passWord)
        .then((res) => {
            let result = res.data.data
            if(result){
                dispatch(changeLogin(result))
            }else{

            }
            
        })
        .catch((err) => {

        })
    }
}


export const logout = () => {
    return (dispatch) => {
        dispatch(changeLogout())
    }
}
