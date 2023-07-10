import { FooterBar, FooterNavItems, FooterNavItem, SidebarContainer, NavItems, NavLink, NavItem, NavText, ContactContainer, ContactHeading, ContactIconContainer, ContactIcon, ContactDescription } from './styledComponent'
import { AiFillHome, } from 'react-icons/ai'
import { HiFire } from 'react-icons/hi'
import { IoLogoGameControllerB } from 'react-icons/io'
import { CgPlayListAdd } from 'react-icons/cg'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import { useState } from 'react'
import './index.css'

const Sidebar = () => (

    <ThemeAndVideoContext.Consumer>

        {value => {

            const { isDarkTheme, toggleTheme, changeTab, activeTab } = value

            const bgColor = isDarkTheme ? '#313131' : '#f1f5f9'

            const textColor = isDarkTheme ? '#ffffff' : '#313131'

            const activeTabBg = isDarkTheme ? '#475569' : '#CBD5E1'

            const iconColor=activeTab?'red':'gray'


            const onClickHome = () => {
                changeTab('Home')
            }

            const onClickTrend = () => {
                changeTab('Trending')
            }


            const onClickGame = () => {
                changeTab('Gaming')
            }

            const onClickSaved = () => {
                changeTab('Saved Videos')
            }

            return (
                <>
                    <SidebarContainer style={{ backgroundColor: `${bgColor}` }} className='sidebar-container'>
                        <NavItems>
                            <NavLink to='/' style={{textDescoration:'none'}}>
                                <NavItem onClick={onClickHome} bgColors={activeTab === 'Home' ? activeTabBg : 'none'} iColor={activeTab === 'Home' ?iconColor:'gray' }>
                                    <AiFillHome style={{ fontSize: 20}} />
                                    <NavText style={{ color: `${textColor}` }}>Home</NavText>

                                </NavItem>
                            </NavLink>
                            <NavLink to='/trending' >
                                <NavItem onClick={onClickTrend} bgColors={activeTab === 'Trending' ? activeTabBg : 'none'}  iColor={activeTab === 'Trending'?iconColor:'gray' }>
                                    <HiFire style={{ fontSize: 20}} />
                                    <NavText style={{ color: `${textColor}` }}>Trending</NavText>

                                </NavItem>
                            </NavLink>
                            <NavLink to='/gaming'>
                                <NavItem onClick={onClickGame} bgColors={activeTab === 'Gaming' ? activeTabBg : 'none'}  iColor={activeTab === 'Gaming' ?iconColor:'gray' }>
                                    <IoLogoGameControllerB style={{ fontSize: 20 }} />
                                    <NavText style={{ color: `${textColor}` }}>Gaming</NavText>

                                </NavItem>
                            </NavLink>
                            <NavLink to='/saved-videos'>
                                <NavItem onClick={onClickSaved} bgColors={activeTab === 'Saved Videos' ? activeTabBg : 'none'}  iColor={activeTab === 'Saved Videos' ?iconColor:'gray' }>
                                    <CgPlayListAdd style={{ fontSize: 20}} />
                                    <NavText style={{ color: `${textColor}` }}>Saved Videos</NavText>

                                </NavItem>
                            </NavLink>
                        </NavItems>
                        <ContactContainer className='contact-container'>
                            <ContactHeading style={{ color: `${textColor}` }}>CONTACT US</ContactHeading>
                            <ContactIconContainer>
                                <ContactIcon src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png' alt='facebook logo' />
                                <ContactIcon src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png' alt='twitter logo' />
                                <ContactIcon src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png' alt='linked in logo' />
                            </ContactIconContainer>
                            <ContactDescription style={{ color: `${textColor}` }}>Enjoy! Now to see your channels and recommendations!</ContactDescription>
                        </ContactContainer>
                    </SidebarContainer>

                    <FooterBar style={{ backgroundColor: `${bgColor}` }}>
                        <FooterNavItems>
                            <NavLink to='/'>
                                <FooterNavItem onClick={onClickHome} iColor={activeTab === 'Home' ?iconColor:'gray' }>
                                    <AiFillHome style={{ fontSize: 30}} />
                                </FooterNavItem>
                            </NavLink>
                            <NavLink to='/trending'>
                                <FooterNavItem onClick={onClickTrend} iColor={activeTab === 'Trending' ?iconColor:'gray' }>
                                    <HiFire style={{ fontSize: 30}} />
                                </FooterNavItem>
                            </NavLink>
                            <NavLink to='/gaming'>
                                <FooterNavItem onClick={onClickGame} iColor={activeTab === 'Gaming' ?iconColor:'gray' }>
                                    <IoLogoGameControllerB style={{ fontSize: 30}} />
                                </FooterNavItem>
                            </NavLink>
                            <NavLink to='/saved-videos'>
                                <FooterNavItem onClick={onClickSaved} iColor={activeTab === 'Saved Videos' ?iconColor:'gray' }>
                                    <CgPlayListAdd style={{ fontSize: 30, color: 'gray' }} />
                                </FooterNavItem>
                            </NavLink>
                        </FooterNavItems>
                    </FooterBar>


                </>

            )
        }}

    </ThemeAndVideoContext.Consumer>
)


export default Sidebar