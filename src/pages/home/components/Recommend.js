import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
    RecommendWrapper,
    RecommendItem,
    DownloadApp
} from '../style'

class Recommend extends PureComponent {
    render() {
        const { RecommendList } = this.props;
        return (
            <div>
                <RecommendWrapper>
                    {
                        RecommendList.map((item) => (
                                <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>

                                </RecommendItem>
                        ))
                    }

                    <DownloadApp>

                    </DownloadApp>
                </RecommendWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    RecommendList:state.getIn(['home', 'RecommendList'])
})

export default connect(mapState, null)(Recommend)