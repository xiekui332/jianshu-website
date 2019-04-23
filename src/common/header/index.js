import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Addition,
    Button
} from './style'; 


// 高性能的无状态组件
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>
                    首页
                </NavItem>
                <NavItem className='left'>
                    下载APP
                </NavItem>
                <NavItem className='right'>
                    登陆
                </NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={300}
                        classNames="input-move"
                    >
                        <NavSearch
                            className={props.focused?'focused': ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={props.focused?'focused iconfont':'iconfont'}>&#xe623;</span>
                </SearchWrapper>
            </Nav>

            <Addition>
                <Button className="writting"><span className="iconfont">&#xe6a4;</span>写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}



const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 获取焦点
        handleInputFocus() {
            const action = {
                type:'search_focus',
                focused:true
            }
            dispatch(action)
        },

        // 失去焦点
        handleInputBlur() {
            const action = {
                type:'search_blur',
                focused:false
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)