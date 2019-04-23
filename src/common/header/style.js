import styled from 'styled-components'
import logoPic from '../../statics/jianshu-logo.png'

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;
 
export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    left:0;
    top:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    padding-right:70px;
    box-sizing:border-box;
    height:100%;
    margin:0 auto;
`;

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
        cursor:pointer;
    }
    &.right{
        float:right;
        color:#969696;
        cursor:pointer;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    margin-top:9px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    background:#eee;
    font-size:14px;
    margin-left:20px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    float:right;
    line-height:38px;
    margin-right:20px;
    padding:0 20px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
    .iconfont{
        margin:0 5px 0 -5px;
    }
    cursor:pointer;
`;

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .input-move-enter{
        transition:all .3s ease-out;
    }
    .input-move-enter-active{
        width:240px;
    }
    .input-move-exit{
        width:240px;
    }
    .input-move-exit-active{
        width:160px;
        transition:all .3s ease-out;
    }
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`

