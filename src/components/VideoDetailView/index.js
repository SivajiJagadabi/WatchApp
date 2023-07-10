
import { Component } from 'react'
import { VideoDetailContainer,LoaderContainer } from './styledComponents'
import { useParams } from "react-router-dom";
import {Rings} from 'react-loader-spinner';
import PlayVideoView from '../PlayVideoView'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Cookies from 'js-cookie'

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}


const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE'
}


class VideoDetailView extends Component {





    state = { videoDetailsList: [], isLiked: false, isDisLiked: false, apiStatus: apiStatusConstants.initial }




    componentDidMount() {
        this.getVideoDetailsView()
    }



    formattedData = (data) => ({
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        videoUrl: data.video_details.video_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count

    })



    getVideoDetailsView = async () => {
        this.setState({ apiStatus: apiStatusConstants.inProgress })
        const jwtToken = Cookies.get('jwt_token')

        let { id } = this.props.params
        console.log(id)

        const apiUrl = `https://apis.ccbp.in/videos/${id}`
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        }

        const responsive = await fetch(apiUrl, options)
        if (responsive.ok) {
            const data = await responsive.json()
            // console.log(data)
            const updatedData = this.formattedData(data)
            this.setState({ videoDetailsList: updatedData, apiStatus: apiStatusConstants.success })
        } else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }

    }

    clickedLike=()=>{
        this.setState(prevState=>({isLiked:!prevState.isLiked,isDisLiked:false}))
    }

    clickedDisLike=()=>{
        this.setState(prevState=>({isDisLiked:!prevState.isDisLiked,isLiked:false}))
    }

    renderPlayVideoView=()=>{
        const {videoDetailsList,isLiked,isDisLiked}=this.state

        return(
            <PlayVideoView
             videoDetails={videoDetailsList}
              isLiked={isLiked}
              isClickedLike={this.clickedLike}
              isClickedDisLike={this.clickedDisLike}
               isDisLiked={isDisLiked}/>
        )
    }



    renderLoadingView=()=>{
        return(
            <LoaderContainer>
                <Rings type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </LoaderContainer>
        )
    }

  

    renderVideoDetailsView = () => {
        const { apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderPlayVideoView()
            case apiStatusConstants.failure:
                return this.renderFailueView()
            case apiStatusConstants.inProgress:
                return this.renderLoadingView()
            default:
                return null


        }
    }



    render() {
        const { videoDetailsList } = this.state
        console.log(videoDetailsList)
        return (
            <>
                <Header />
                <Sidebar />
                <VideoDetailContainer>
                    {this.renderVideoDetailsView()}
                </VideoDetailContainer>
            </>
        )
    }
}

export default withParams(VideoDetailView)