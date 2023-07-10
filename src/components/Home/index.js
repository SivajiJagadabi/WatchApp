import { Component } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner'
import HomeVideos from '../HomeVideos'

import {
    LoaderContainer, HomeContainer, BannerContainer, BannerButton, BannerText, BannerLogo, BannerLeftCard, BannerCloseButton, SearchIconContainer, SearchContainer, SearchInput
} from './styledComponents'
import { AiOutlineClose } from "react-icons/ai";
import { BiSearch } from 'react-icons/bi'
import FailureView from "../FailureView";
import ThemeAndVideoContext from "../../context/ThemeAndVideoContext";


const apiStatusConstants = {
    initial: 'INTIAL',
    success: 'SUCCESS',
    loader: 'LOADER',
}


class Home extends Component {

    state = { display: 'flex', homeVideosList: [], searchInput: '', apiStatus: apiStatusConstants.initial }

    componentDidMount() {
        this.getVideos()
    }

    getVideos = async () => {

        const { searchInput } = this.state
        this.setState({ apiStatus: apiStatusConstants.loader })
        const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }

        const response = await fetch(apiUrl, options)
        if (response.ok === true) {
            const data = await response.json()
            // console.log(data)

            const updatedData = data.videos.map(eachVideo => ({
                id: eachVideo.id,
                title: eachVideo.title,
                publishedAt: eachVideo.published_at,
                thumbnailUrl: eachVideo.thumbnail_url,
                viewCount: eachVideo.view_count,
                name: eachVideo.channel.name,
                profileImageUrl: eachVideo.channel.profile_image_url,

            }))
            this.setState({ homeVideosList: updatedData, apiStatus: apiStatusConstants.success, })
        } else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }

    }

    onCloseBanner = () => {
        this.setState({ display: 'none' })
    }

    onChangeInput = event => {
        this.setState({ searchInput: event.target.value })
    }


    renderVideosView = () => {
        const { homeVideosList } = this.state

        return (
            <HomeVideos homeVideosList={homeVideosList} />

        )
    }

    renderLoaderView = () => (
        <LoaderContainer>
            <ThreeDots type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </LoaderContainer>
    )

    onRetry = () => {
        this.getVideos()
    }

    onSearchResults=()=>{
        this.getVideos()
    }

    renderFailureView = () => <FailureView onRetry={this.onRetry} />

    renderHomeVideos = () => {
        const { apiStatus } = this.state
        switch (apiStatus) {

            case apiStatusConstants.success:
                return this.renderVideosView()

            case apiStatusConstants.loader:
                return this.renderLoaderView()

            case apiStatusConstants.failure:
                return this.renderFailureView()

            default:

                return null
        }
    }


    render() {
        const { display, searchInput } = this.state

        return (

            <ThemeAndVideoContext.Consumer>
                {value => {
                    const { isDarkTheme } = value
               
                    const bgColor=isDarkTheme?'black':'#ffffff'




                return (

                <>
                    <Header />
                    <Sidebar />
                    <HomeContainer style={{backgroundColor:`${bgColor}`}}>
                        <BannerContainer style={{ display: `${display}` }}>
                            <BannerLeftCard>
                                <BannerLogo src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png' />
                                <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
                                <BannerButton>Get It Now</BannerButton>
                            </BannerLeftCard>
                            <BannerCloseButton onClick={this.onCloseBanner}>
                                <AiOutlineClose />
                            </BannerCloseButton>
                        </BannerContainer>
                        <SearchContainer>
                            <SearchInput type='search' placehodler='search' onChange={this.onChangeInput}  value={searchInput}/>
                            <SearchIconContainer onClick={this.onSearchResults} data-testid="searchButton"><BiSearch /></SearchIconContainer>
                        </SearchContainer>
                        {this.renderHomeVideos()}
                    </HomeContainer>

                </>
                 
                )

            }}
            </ThemeAndVideoContext.Consumer>
        )
    }

}

export default Home