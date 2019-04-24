import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
 
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchItem,
    SearchSwitch,
    Addition,
    Button
} from './style'; 
// import { list } from 'postcss';



class Header extends Component {
    constructor(props){
        super(props)
        this.getListArea = this.getListArea.bind(this)
    }

    getListArea(show) {
        if(show){
            return (
                <SearchInfo>
                    <SearchTitle>
                        热门搜索
                        <SearchSwitch>
                            换一批
                        </SearchSwitch>
                    </SearchTitle>
                    <div>
                        {
                            this.props.list.map((item, index) => (
                                <SearchItem key={item}>{item}</SearchItem>
                            ))
                        }
                    </div>
                </SearchInfo>
            )
        }else{
            return null
        }
    }

    render() {
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
                            in={this.props.focused}
                            timeout={300}
                            classNames="input-move"
                        >
                            <NavSearch
                                className={this.props.focused?'focused': ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        {this.getListArea(this.props.focused)}
                        <span className={this.props.focused?'focused iconfont':'iconfont'}>&#xe623;</span>
                    </SearchWrapper>
                </Nav>
    
                <Addition>
                    <Button className="writting"><span className="iconfont">&#xe6a4;</span>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
        
}

// 高性能的无状态组件
// const Header = (props) => {
    
// }



const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused') or
        focused: state.getIn(['header', 'focused']),        // 可接收数组表示层级逐次往下
        list: state.getIn(['header', 'list']) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 获取焦点
        handleInputFocus() { 
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },

        // 失去焦点
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)