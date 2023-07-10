import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  height: 80px;
  padding-left:20px;
  padding-right:20px;
  position:fixed;
  background-color: ${props => props.backgrodunColor};
  top:-1px;
 width:98%;

  
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`



export const Logo = styled.img`
  width: 100px;
  height:30px;
`

export const IconsContainer=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
 `
 export const ProfileLogo = styled.img`
 width: 30px;
 height:30px;
`

export const Logout = styled.button`
 border:1px solid skyblue;
 border-radius:2px;
 color:skyblue;
 background-color:transparent;
 height:25px;
 font-weight:700;
 margin-left:12px;
 cursor:pointer;
 margin-right:6px;
`

export const smallLogout=styled.div`
color:gray;
background-color:transparent;
height:25px;
font-weight:700;
margin-left:18px;
font-size:30px;
cursor:pointer;

`
