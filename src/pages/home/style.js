import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLeft = styled.div`
    width:625px;
    margin-right:15px;
    padding-top:30px;
    float:left;
    .banner-image{
        width:100%;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    width:280px;
    height:300px;
    float:left;
    margin-left:30px;
`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0; 
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    height:32px;
    lien-hieght:32px;
    background:#f7f7f7;
    display:inline-block;
    margin-left:15px;
    margin-bottom:18px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    cursor:pointer;
    img{
        display:block;
        width:32px;
        height:32px;
        float:left;
        margin-right:10px;
    }
`;

export const TopicText = styled.span`   
    font-size:14px;
    color:#666666;
    line-height:30px;
    padding-right:15px;
    color:#000;
`;


// list.js
export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    img{
        float: right;
        width: 150px;
        height: 100px;
        border-radius:2px;
    }
`;

export const ListInfo = styled.div`
    padding-right:170px;
    .title{  
        display:block;
        margin: -7px 0 4px;
        color: #333;
        line-height: 27px;
        font-size: 18px;
        font-weight: 700;
        margin-top: -4px;
        cursor: pointer;
        text-decoration: none;
    }
    .title:hover{
        text-decoration: underline;
    }
    p{  
        overflow:hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-decoration: none;
    }
`;

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5; 
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;



// Recommend.js

export const RecommendWrapper = styled.div`
    margin:26px 0 30px 0;
    width:280px;
    padding-bottom: 4px;
    min-height: 228px;
`;

export const RecommendItem = styled.div`
    width:100%;
    height:50px;
    background:url(${(props) => (props.imgUrl)});
    background-size:contain;
    background-repeat:no-repeat;
    margin-bottom:5px;
`;


export const DownloadApp = styled.a.attrs({
    href:''
})`
    display:block;
    border:1px solid #dcdcdc;
    border-radius:3px;
    margin-bottom: 30px;
    padding: 10px 22px;
    min-height:50px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;

`;

// 回到顶部
export const BackTop = styled.div`
    position:fixed;
    right:50px;
    bottom:50px;
    padding:20px 5px;
    font-size:12px;
    border:1px solid #dcdcdc;
    cursor:pointer;
`;