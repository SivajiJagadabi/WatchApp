import { VideoPlayer, ViewLikeCard, LikesButtons, TitleCard, Description, ChannelLogo } from './styledComponents'
import { BiDislike, BiLike } from 'react-icons/bi'
import { BiListPlus } from 'react-icons/bi'
import ReactPlayer from 'react-player'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'



const PlayVideoView = (props) => {
    const { videoDetails, isLiked, isDisLiked, isClickedLike, isClickedDisLike, LikeCard } = props

    const {id,videoUrl, title, name, viewCount, publishedAt, profileImageUrl, subscriberCount, description } = videoDetails

    const onClickLike = () => {
        isClickedLike()
    }


    const onClickDislike = () => {
        isClickedDisLike()
    }

    const isLikedText = isLiked ? '#2563eb' : "#64748b"

    const isDisLikedText = isDisLiked ? '#2563eb' : "#64748b"

   

    return (
        <ThemeAndVideoContext.Consumer>

            {value => {
                const { isDarkTheme,addVideo,savedVideos} = value

                const textColor=isDarkTheme?'white':'black'
                const bgColor=isDarkTheme?'black':'white'

               const onClickSave=()=>{
                    addVideo(videoDetails)

                }

                let isSaved 

                const index=savedVideos.findIndex(eachVideo=>eachVideo.id===videoDetails.id)

                if(index===-1){
                    isSaved=false
                }else{
                    isSaved=true
                }


                const saveText=isSaved?'Saved':'Save'
                
                const SaveTextColor=isSaved?'#2563eb' : "#64748b"


                return (
                    <VideoPlayer style={{backgroundColor:`${bgColor}`}}>
                        <ReactPlayer url={videoUrl} controls width='100%'/>
                        <p style={{color:`${textColor}`}}>{title}</p>
                        <ViewLikeCard>
                            <p style={{color:`gray`}} >{viewCount} Views. {publishedAt}</p>
                            <LikesButtons>
                                <button style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 12, backgroundColor: 'transparent', cursor: 'pointer', border: 'none' }} onClick={onClickLike}>
                                    <BiLike style={{ fontSize: 25, color: `${isLikedText}`, marginRight: 3 }} /> <p style={{ color: `${isLikedText}` }}> Like</p>
                                </button>
                                <button style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 12, backgroundColor: 'transparent', cursor: 'pointer', border: 'none' }} onClick={onClickDislike}>
                                    <BiDislike style={{ fontSize: 25, color: `${isDisLikedText}`, marginRight: 3 }} /> <p style={{ color: `${isDisLikedText}` }}> DisLike</p>
                                </button>
                                <button style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 12, backgroundColor: 'transparent', cursor: 'pointer', border: 'none'}} onClick={onClickSave} >
                                    <BiListPlus style={{ fontSize: 25, color: 'gray', marginRight: 3 ,color:`${SaveTextColor}`}} /> <p style={{color:`${SaveTextColor}`}}>{saveText}</p>
                                </button>
                            </LikesButtons>

                        </ViewLikeCard>
                        <hr />
                        <Description>
                            <ChannelLogo src={profileImageUrl} />
                            <TitleCard>
                                <p style={{ marginTop: 3, marginBottom: 3, fontSize: 18,color:`${textColor}` }}>{name}</p>
                                <p style={{ marginTop: 3, marginBottom: 3, fontSize: 14, color: 'gray' }}>{subscriberCount} subscribers</p>
                                <p style={{ marginTop: 7, fontSize: 14,color:`${textColor}`}}>{description}</p>
                            </TitleCard>
                        </Description>
                    </VideoPlayer>
                )
            }}
        </ThemeAndVideoContext.Consumer>
    )
}


export default PlayVideoView