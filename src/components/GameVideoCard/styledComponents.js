import {styled} from 'styled-components'



export const GamingListItem = styled.li`
    display:flex;
    flex-direction:column;
    margin:20px;
    margin-right:0px;

    @media screen and (max-width:768px){
      width:100%;
    }

`
export const GameVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction:row;

  flex-wrap:wrap;

  margin: 0px;
  padding: 0px;
  background-color:rgb(247, 241, 241);
`


export const VideoThumbnail=styled.img`
    width:210px;
   
@media screen and (max-width:768px){
  width:90%;
  margin:auto;
  
}
`