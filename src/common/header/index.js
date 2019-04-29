import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
  
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



class Header extends PureComponent {
    constructor(props){
        super(props)
        this.getListArea = this.getListArea.bind(this)
        
    }


    getListArea() {
        const { 
            list,
            changeMouseEnter,
            changeMouseLeave,
            changeAnotherList,
            page,
            totalPage,
            count
            
        } = this.props;
        
        // 先把immutable数组对象转化为js对象
        const newList = list.toJS();
        const mapList = []
        if(newList.length){
            for(let i = (page - 1) * 10; i < page * 10; i ++){
                mapList.push(
                    // 避免不满10条是循环出来的空标签
                    newList[i]?<SearchItem key={newList[i]}>{newList[i]}</SearchItem>:''
                )
            }
            if(this.props.focused || this.props.mouseEnter){
                return (
                    <SearchInfo 
                        onMouseEnter={changeMouseEnter}
                        onMouseLeave={changeMouseLeave}
                    >
                        <SearchTitle>
                            热门搜索
                            <SearchSwitch onClick={() => {changeAnotherList(page, totalPage, this.spin, count)}}>
                            <span ref={(icon) => {this.spin = icon}} className="iconfont spin">&#xe606;</span>   换一批
                            </SearchSwitch>
                        </SearchTitle>
                        <div>
                            {mapList}
                        </div>
                    </SearchInfo>
                )
            }else{
                return null
            }
        }
        
    }

    render() {
        const { focused, list, handleInputFocus, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className='left active'>
                        首页
                    </NavItem>
                    <NavItem className='left'>
                        下载APP
                    </NavItem>
                    {
                        login?
                        <NavItem className='right' onClick={logout}>退出</NavItem>:
                        <Link to="/login">
                            <NavItem className='right'>登陆 </NavItem>
                        </Link>
                    }
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames="input-move"
                        >
                            <NavSearch
                                className={focused?'focused': ''}
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={this.props.handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        {this.getListArea()}
                        <span className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe623;</span>
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
        list: state.getIn(['header', 'list']),
        mouseEnter:state.getIn(['header', 'mouseEnter']),
        page:state.getIn(['header', 'page']),
        totalPage:state.getIn(['header', 'totalPage']),
        count:state.getIn(['header', 'count']),
        login:state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 获取焦点
        handleInputFocus(list) { 
            if(!list.toJS().length){
                dispatch(actionCreators.getList())
            }
            
            dispatch(actionCreators.searchFocus())
        },

        // 失去焦点
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },

        // mouseEnter
        changeMouseEnter() {
            dispatch(actionCreators.changeEnter())
        },

        // mouseLeave
        changeMouseLeave() {
            dispatch(actionCreators.changeLeave())
        },

        // 换一批
        changeAnotherList(page, totalPage, spin, count) { 
            // 一种方法是吧360数组部分截取出来
            // let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')       // 把数字部分替换成空
            spin.style.transform = 'rotate('+ 360*count +'deg)'
            dispatch(actionCreators.addCount(count + 1))
            if(page < totalPage){
                dispatch(actionCreators.setPage(page + 1))
            }else{
                dispatch(actionCreators.setPage(1))
            }
        },

        // logout
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)