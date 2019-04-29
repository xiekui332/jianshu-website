import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
    DetatilWrapper,
    Header,
    Content
} from './style'

class Detail extends PureComponent {
    render() {
        return (
            <DetatilWrapper>
                <Header>
                    衡水中学
                </Header>
                <Content>
                    <img src="//upload-images.jianshu.io/upload_images/2100084-ea2a6aacf083182f" alt="" />
                    <p>
                        但他又不是真的什么时候都赖，当部门有预算的时候，
                        当部门有奖励的时候，他永远会第一时间冲在最前面，作为领导，
                        这无可厚非。但后来，他闹出了“私吞部门奖金”这么一件丑事，
                        我毫不犹豫的就离职了，一个这样的领导，不值得追随。

                    </p>
                </Content>
            </DetatilWrapper>
        )
    }


    componentDidMount() {
        let id = this.props.match.params.id
        console.log(id)
    }
}

// withRouter()让组件有能力获取router里面的所有参数
export default connect(null,null)(withRouter(Detail))