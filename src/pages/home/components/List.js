import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    ListItem,
    ListInfo
} from '../style'

class List extends Component {
    render() {
        const { articleList } = this.props;
        return (
            <div>
                {
                    articleList.map((item, index) => (
                        <ListItem key={item.get('id')}>
                            <img alt="" src="https://oimagea8.ydstatic.com/image?id=304297443776517614&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60" />
                            <ListInfo>
                                <a className="title" href="/p/cf907f0ed4d1" target="_blank">
                                {item.get('title')}
                                </a>
                                <p>
                                {item.get('desc')}
                                </p>
                            </ListInfo>
                        </ListItem>
                    ))
                }
                
            </div>
        )
    }
}

const mapState = (state) => ({
    articleList:state.getIn(['home', 'articleList'])
})

export default connect(mapState, null) (List)