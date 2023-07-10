import { Link } from 'react-router-dom'
import { TrendingListItem, VideoDescription, VideoThumbnail,TrendingVideoList } from './styledComponents'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'




const VideoCard = props => {
    const { trendVideoDetails } = props
    const { id, title, thumbnailUrl, publishedAt, viewCount, profileImageUrl, name } = trendVideoDetails

    return (
        <ThemeAndVideoContext.Consumer>

            {value => {
                const { isDarkTheme } = value

                const bgColor=isDarkTheme?'black':'white'
                const textColor=isDarkTheme?'white':'black'

                return (
                    <Link to={`/videos/${id}`} style={{ textDecoration: 'none' }}>
                          <TrendingVideoList style={{backgroundColor:`${bgColor}`}}>
                        <TrendingListItem>
                            <VideoThumbnail src={thumbnailUrl} />
                            <VideoDescription>
                                <p style={{color:`${textColor}`}}>{title}</p>
                                <p style={{ marginTop: 3, marginBottom: 3, fontSize: 14, color: 'gray' }}>{name}</p>
                                <p style={{ marginTop: 3, marginBottom: 3, fontSize: 14, color: 'gray' }}>{viewCount} Views. {publishedAt}</p>
                            </VideoDescription>
                        </TrendingListItem>
                        </TrendingVideoList>
                    </Link>
                )
            }}
        </ThemeAndVideoContext.Consumer>
    )

}

export default VideoCard