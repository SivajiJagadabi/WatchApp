import {styled} from 'styled-components'



export const TrendingListItem = styled.li`
    display:flex;
    flex-direction:row;
   
    margin:25px;
    @media screen and (max-width:768px){
        display:flex;
        flex-direction:column;
       
    }

`


export const VideoDescription=styled.div`
display:flex;
    flex-direction:column;
    
    margin-left:15px;


`


export const VideoThumbnail=styled.img`
    width:310px;
    height:160px;

`

export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  background-color:rgb(247, 241, 241);
`