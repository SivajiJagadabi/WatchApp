import { styled } from 'styled-components'
import {Link} from 'react-router-dom'

export const VideosCards = styled.div`
display:flex;
flex-direction:row;
background-color:blue;
`

export const VideoItem = styled(Link)`
    display:flex;
    flex-direction:column;
    width:22%;
    margin:15px; 
    margin-left:0px;
    text-decoration:none;

    @media screen and (max-width:768px){
        width:100%;
    }
`

export const ThumbnailImg = styled.img`
    width:100%;

`

export const ChannelLogo = styled.img`    
width:30px;
height:30px;
`


export const Description = styled.div`
display:flex;
flex-direction:row;
margin-top:12px;


`

export const TitleCard = styled.div`
display:flex;
flex-direction:column;

`  