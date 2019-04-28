import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { 
    TopicWrapper, 
    TopicItem, 
    TopicText 
} from '../style'

class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item, index) => (
                        <TopicItem key={item.id}>
                            <img alt="hot" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2785510515,2832235516&fm=26&gp=0.jpg" />
                            <TopicText>{item.title}</TopicText>
                        </TopicItem>
                    ))
                }
                
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list:state.getIn(['home', 'topicList']).toJS()
});

// 现代导出德是一个容器组件
export default connect(mapState, null)(Topic)