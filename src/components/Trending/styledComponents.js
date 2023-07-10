import { styled } from 'styled-components'


export const TrendingContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    margin-top:20px;
    margin-left:210px;
    margin-top:78px;
    @media screen and (max-width:768px){
        margin-left:0px;

        width:100%;
    }
`

export const BgContainer = styled.div`
background-color:#EBEBEB;
display:flex;
align-items:center;
flex-direction:row;

width: 100%;
height:110px;

`

export const IconContainer = styled.div`
background-color:#D7DFE9;
    border-radius:50px;
    width: 60px;
    height: 60px;
    border-radius: 80px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:30px;
   `


export const LoaderContainer = styled.div`
   height:80vh;
   display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`

