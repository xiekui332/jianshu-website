import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button
 } from './style'

class Login extends PureComponent{
    render() {
        const { loginStatus } = this.props
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref = {(input) => {this.count = input}} />
                        <Input placeholder="密码" ref = {(input) => {this.passWord = input}} type='password' />
                        <Button onClick={() => {this.props.login(this.count, this.passWord)}}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            // 表示重定向
            return <Redirect to="/"></Redirect>
        }
        
    }
}

// 需要返回所以使用({})
const mapState = (state) => ({
    loginStatus:state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(countEle, passWordEle) {
        dispatch(actionCreators.login(countEle.value, passWordEle.value))
    }
})


export default connect(mapState, mapDispatch)(Login)