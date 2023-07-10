import { Component } from 'react'
import { TrendingContainer, BgContainer, IconContainer, LoaderContainer, TrendingVideoList } from './styledComponents'
import Sidebar from '../Sidebar'
import Header from '../Header'
import { HiFire } from 'react-icons/hi'
import Cookies from 'js-cookie'
import { ThreeDots } from 'react-loader-spinner'
import VideoCard from '../VideoCard'
import FailureView from '../FailureView'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'


const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE'
}

class Trending extends Component {

    state = { trendVideosList: [], apiStatus: apiStatusConstants.initial }

    componentDidMount() {
        this.getTrendVideos()
    }



    getTrendVideos = async () => {
        this.setState({ apiStatus: apiStatusConstants.inProgress })
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = `https://apis.ccbp.in/videos/trending`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }

        const responsive = await fetch(apiUrl, options)
        if (responsive.ok === true) {
            const data = await responsive.json()

            // console.log(data)

            const updatedData = data.videos.map(eachVideo => ({
                id: eachVideo.id,
                title: eachVideo.title,
                thumbnailUrl: eachVideo.thumbnail_url,
                viewCount: eachVideo.view_count,
                publishedAt: eachVideo.published_at,
                name: eachVideo.channel.name,
                profileImageUrl: eachVideo.channel.profile_image_url,
            }))

            this.setState({
                trendVideosList: updatedData, apiStatus: apiStatusConstants.success

            })
        } else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }

    }




    renderLoadingView = () => (
        <LoaderContainer>
            <ThreeDots type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </LoaderContainer>
    )



    onRetry = () => {
        this.getTrendVideos()
    }

    renderFailureView = () => <FailureView onRetry={this.onRetry} />


    renderTrendVideos = () => {

        const { trendVideosList } = this.state


        return (

            <>
                {trendVideosList.map(eachVideo => (
                    <VideoCard trendVideoDetails={eachVideo} key={eachVideo.id} />
                ))}

            </>


        )
    }


    rednerTrendingVideos = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderTrendVideos()
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            case apiStatusConstants.failure:
                return this.renderFailureView()
            default:
                return null
        }
    }



    render() {
        const { trendVideosList } = this.state
        console.log(trendVideosList)

        return (
            <ThemeAndVideoContext.Consumer>

                {value => {

                    const { isDarkTheme } = value

                    const bgColor = isDarkTheme ? 'black' : '#ffffff'
                    const bgCardColor = isDarkTheme ? '#212121' : '#EBEBEB'
                    const textColor = isDarkTheme ? 'white' : 'black'
                    const iconContainer = isDarkTheme ? 'black' : '#D7DFE9'

                    return (
                        <>
                            <Header />
                            <Sidebar />
                            <TrendingContainer style={{ backgroundColor: `${bgColor}` }}>
                                <BgContainer style={{ backgroundColor: `${bgCardColor}` }}>
                                    <IconContainer style={{ backgroundColor: `${iconContainer}` }}>
                                        <HiFire style={{ color: 'red', fontSize: 30 }} />

                                    </IconContainer>
                                    <p style={{ fontSize: 23, fontWeight: 600, fontFamily: 'Roboto', marginLeft: 12, color: `${textColor}` }}>Trending</p>
                                </BgContainer>

                                {this.rednerTrendingVideos()}

                            </TrendingContainer>

                        </>
                    )
                }}
            </ThemeAndVideoContext.Consumer>
        )
    }
}


export default Trending