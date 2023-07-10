import {styled} from 'styled-components'


export const HomeContainer=styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    margin-top:20px;
    padding-left:210px;
    margin-top:78px;
    @media screen and (max-width:768px){
        padding-left:0px;

        width:100%;
    }

`

export const  BannerContainer=styled.div`
    background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    display:flex;
    flex-direction:row;
  justify-content:space-between;
    width: 94%;
    height:200px;
    padding-left: 0px;
    background-size: cover;

    @media screen and (max-width:768px){
        width:100%;
        height:160px;
        
    }
    
`

export const BannerLeftCard=styled.div`
display:flex;
flex-direction:column;
margin:20px;

`

export const BannerLogo=styled.img`
    width:100px;
    

`

export const BannerText=styled.p`
    font-size:18px;


`


export const BannerButton=styled.button`
    height:32px;
    width:80px;
   
`

export const BannerCloseButton=styled.button`
    font-size:25px;
    border:none;
    outline:none;
    cursor:pointer;
    background-color:transparent;
    display:flex;
    justify-contnet:flex-end;
   margin-top:20px;
   

`

export const SearchContainer=styled.div`
    border:1px solid gray;
    width:310px;
    height:30px;
   background-color:white;
   display:flex;
   color:black;
   border-radius:1px;
   margin:20px;
`


export const SearchInput=styled.input`
    border:none;
    outline:none;
    width:280px;
    

`



export const SearchIconContainer=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:lightgray;
    font-size:20px;

    width:45px;
    height:30px;
`


export const LoaderContainer=styled.div`
    height:80vh;
    display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;

`