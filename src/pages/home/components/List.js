import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'

class List extends PureComponent {
    render() {
        const { articleList, loadMore, pages } = this.props;
        return (
            <div>
                {
                    articleList.map((item, index) => (
                        <Link to="/detail" key={item.get('id')}>
                            <ListItem>
                                <img alt="" src="https://oimagea8.ydstatic.com/image?id=304297443776517614&product=adpublish&w=300&h=200&sc=0&rm=2&gsb=0&gsbd=60" />
                                <ListInfo>
                                    <div className="title">
                                    {item.get('title')}
                                    </div>
                                    <p>
                                    {item.get('desc')}
                                    </p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                
                {
                    this.handleLoadMore(pages, loadMore)
                    
                }
            </div>
        )
    }


    // 加载更多按钮
    handleLoadMore(pages, loadMore) {
        if(pages !== 2){
            return (
                <LoadMore onClick={loadMore}>
                    更多
                </LoadMore>
            )
        }
    }
}

const mapState = (state) => ({
    articleList:state.getIn(['home', 'articleList']),
    pages:state.getIn(['home', 'pages'])
})

const mapDispatch = (dispatch) => ({
    loadMore() {
        dispatch(actionCreators.loadMoreData())
    }
})


export default connect(mapState, mapDispatch) (List)