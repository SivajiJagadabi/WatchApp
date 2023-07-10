import { styled } from 'styled-components'
import { Link } from 'react-router-dom'



export const SidebarContainer = styled.div`
    display:flex;
    flex-direction:column;
    position:fixed;
    top:78px;
    justify-content:space-between;
    height:88vh;
  max-width:210px;
  overflow-y: auto;
  @media screen and (max-width:768px){
    display:none;
  }

`


export const FooterBar = styled.div`


position:fixed;
bottom:0;
justify-content:space-between;
height:60px;
width:100%;

@media screen and (min-width:768px){
  display:none;
}

`


export const NavItems = styled.ul`
    display:flex;
    flex-direction:column;
   
    flex-grow: 1;
  list-style-type: none;
  padding-left: 0px;
 
margin-top:0px;
`


export const FooterNavItems = styled.ul`
display:flex;
    flex-direction:row;
   align-items:center;
   justify-content:space-around;
 
  list-style-type: none;
  padding-left: 0px;

`

export const NavLink = styled(Link)`
    text-decoration:none;
    margin-top:0px;
    margin-bottom:0px;
  
`

export const NavItem = styled.li`
display: flex;
flex-direction: row;
align-items: center;

padding-left:20px;
margin:0px;
background-color:${props => props.bgColors};
color:${props=>props.iColor};

`

export const FooterNavItem = styled.li`

color:${props=>props.iColor};

`

export const NavText = styled.p`
    font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;
`


export const ContactContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;    

`

export const ContactHeading = styled.h1`
    font-size:18px;
    font-family:'Roboto';
    padding-left:20px;
        
`

export const ContactIconContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-left:20px;

`

export const ContactIcon = styled.img`
width: 30px;
height:30px;
margin-right:10px;

`


export const ContactDescription = styled.p`
font-size:16px;
font-family:'Roboto';
padding-left:20px;
padding-top:8px;
`