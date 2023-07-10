import { VideosCards, VideoItem, ThumbnailImg, ChannelLogo, Description, TitleCard } from './styledComponents'
import './index.css'
import { Link } from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const HomeVideoCard = props => {
    const { video } = props
    const { id, title, thumbnailUrl, publishedAt, name, profileImageUrl, viewCount } = video

    return(

        <ThemeAndVideoContext.Consumer>

    {value=>{
        const {isDarkTheme}=value

        const titleColor=isDarkTheme?'white':'black'

    return (

 

            <VideoItem to={`/videos/${id}`}>
                <ThumbnailImg src={thumbnailUrl} />
                <Description>
                    <ChannelLogo src={profileImageUrl} />
                    <TitleCard>
                        <p style={{ marginTop: 1, marginBottom: 3, fontSize: 13,marginLeft:8 ,color:`${titleColor}`}}>{title}</p>
                        <p style={{ marginTop: 3, marginBottom: 3, fontSize: 14, color: 'gray',marginLeft:8  }}>{name}</p>
                        <Description>
                            <p style={{ marginTop: 3, marginBottom: 3, fontSize: 12, color: 'gray',marginLeft:8  }}>{viewCount} Views . </p>
                            <p style={{ marginTop: 3, marginBottom: 3, fontSize: 12, color: 'gray',marginLeft:8 ,paddingLeft: 8 }}>{publishedAt}</p>
                        </Description>
                    </TitleCard>

                </Description>
            </VideoItem>



    )
}}

  </ThemeAndVideoContext.Consumer>

    )
    
    }


export default HomeVideoCard