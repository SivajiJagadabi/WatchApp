import { Component } from 'react'
import { GamingContainer, BgContainer, IconContainer, GameVideosList, LoaderContainer } from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { IoLogoGameControllerB } from 'react-icons/io'
import Cookies from 'js-cookie'
import GameVideoCard from '../GameVideoCard'
import { RotatingSquare, ThreeDots } from 'react-loader-spinner'
import FailureView from '../FailureView'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'


const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'PROGRESS',
    success: 'SUCCESS',
    failure: 'Failure'
}


class Gaming extends Component {

    state = { gameVideoList: [], apiStatus: apiStatusConstants.initial }

    componentDidMount() {
        this.getGameVideos()
    }


    getGameVideos = async () => {
        this.setState({ apiStatus: apiStatusConstants.inProgress })
        const jwtToken = Cookies.get('jwt_token')

        const apiUrl = `https://apis.ccbp.in/videos/gaming`

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
            }))
            this.setState({ gameVideoList: updatedData, apiStatus: apiStatusConstants.success })
        } else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }
    }


    renderGameVideosView = () => {
        const { gameVideoList } = this.state

        return (
            <GameVideosList>
                {gameVideoList.map(eachVideo => (
                    <GameVideoCard videoDetails={eachVideo} key={eachVideo.id} />
                ))}
            </GameVideosList>
        )
    }


    renderLoadingView = () => (
        <LoaderContainer>
            <ThreeDots type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </LoaderContainer>
    )

    onRetry = () => {
        this.getGameVideos()
    }

    renderFailureView = () => <FailureView onRetry={this.onRetry} />


    renderGameVideos = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderGameVideosView()
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            case apiStatusConstants.failure:
                return this.renderFailureView()
            default:
                return null;
        }
    }



    render() {
        const { gameVideoList } = this.state
        console.log(gameVideoList)

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
                            <GamingContainer  style={{ backgroundColor: `${bgColor}` }}>
                                <BgContainer style={{backgroundColor:`${bgCardColor}`}}>
                                    <IconContainer style={{backgroundColor:`${iconContainer}`}}>
                                        <IoLogoGameControllerB style={{ color: 'red', fontSize: 30 }} />

                                    </IconContainer>
                                    <p style={{ fontSize: 23, fontWeight: 600, fontFamily: 'Roboto', marginLeft: 12,color:`${textColor}` }}>Gaming</p>

                                </BgContainer>
                                {this.renderGameVideos()}
                            </GamingContainer>
                        </>
                    )
                }}
            </ThemeAndVideoContext.Consumer>
        )
    }
}


export default Gaming