
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList:[ 
        {
            id:'1',
            title:'社会热点',
            imgUrl:''
        },
        {
            id:'2',
            title:'时尚',
            imgUrl:''
        }
    ],

    articleList:[
        {
            id:1,
            title:'一书一法一工具｜顶级思维｜五大成功法则：作为职场人士必备思维',
            desc:'成功者最善于将这些顶级思维，运用在生活和工作中。 吉德林法则一、吉德林法则：把难题清清楚楚写出来，问题就解决了一半！ 沃尔森法则二、沃尔'
        }
    ],

    // Recommend.js
    RecommendList:[
        {
            id:1,
            imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id:2,
            imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
            id:3,
            imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
        {
            id:4,
            imgUrl:'//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        }
    ]
})

export default ((state = defaultState, action) => {
    switch(action.type) {
        default:
        return state;
    }
})