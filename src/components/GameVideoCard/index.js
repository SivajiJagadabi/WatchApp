
import { Link } from 'react-router-dom'
import { GamingListItem, VideoThumbnail, GameVideosList } from './styledComponents'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'

const GameVideoCard = (props) => {

    const { videoDetails } = props
    const { id, title, name, thumbnailUrl, viewCount } = videoDetails

    return (
        <ThemeAndVideoContext.Consumer>
            {value => {
                const { isDarkTheme } = value

                const bgColor = isDarkTheme ? 'black' : 'white'
                const textColor = isDarkTheme ? 'white' : 'black'

                return (
                    <Link to={`/videos/${id}`} style={{ textDecoration: 'none' }}>
                        <div style={{ backgroundColor:`${bgColor}` }} className='game-videos'>
                            <div className='game-video'>
                                <VideoThumbnail src={thumbnailUrl} />
                                <p style={{ marginTop: 10, marginBottom: 4, color: `${textColor}` }}>{title}</p>
                                <p style={{ marginTop: 0, marginBottom: 3, fontSize: 14, color: 'gray' }}>{viewCount} Watching Worldwide.</p>

                            </div>
                        </div>
                    </Link>
                )

            }}

        </ThemeAndVideoContext.Consumer>
    )
}


export default GameVideoCard