import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { 
    HomeWrapper, 
    HomeLeft, 
    HomeRight
 } from './style'
 import Topic from './components/Topic'
 import List from './components/List'
 import Recommend from './components/Recommend'
 import Writer from './components/Writer'
 import { BackTop } from './style'

class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            show:false
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.backScrollTop = this.backScrollTop.bind(this);
    }

    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img alt="banner" className='banner-image' src='//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                        <Topic>

                        </Topic>
                        <List>

                        </List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend>

                        </Recommend>
                        <Writer>
                            
                        </Writer>
                    </HomeRight>

                    {this.backScrollTop(this.state.show)}
                </HomeWrapper>
                
            </div>
        )
    }

    componentDidMount() {
        this.props.getHomeList()
        window.addEventListener('scroll', this.handleScroll, true)
    }


    // 组件销毁前解除window绑定的事件
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true)
    }


    // scroll事件
    handleScroll() {
        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop > 100){
            this.setState({
                show:true
            })
        }else{
            this.setState({
                show:false
            })
        }
    }

    // 回到顶部
    backScrollTop(show) {
            if(show){
                return (
                    <BackTop onClick={this.props.backTop}>回到顶部</BackTop>
                )
            }
       
    }
}

const mapDispatch = (dispatch) => {
    return {
        getHomeList() {
            const action = actionCreators.changeHomeData()
            dispatch(action)
        },

        // 回到顶部
        backTop() {
            window.scrollTo({
                left:0,
                top:0,
                behavior:'smooth'
            })
        }
    }
}


export default connect(null, mapDispatch)(Home)