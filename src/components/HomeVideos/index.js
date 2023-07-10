import { VideosContainer, NoSavedVideoView, NoSaveImage } from './styledComponents'
import HomeVideoCard from '../HomeVideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'


const HomeVideos = props => {

    const { homeVideosList } = props


    return (
        <ThemeAndVideoContext.Consumer>

            {value => {


                const { isDarkTheme, savedVideos } = value

                const bgColor = isDarkTheme ? 'black' : '#ffffff'
                const bgCardColor = isDarkTheme ? '#212121' : '#EBEBEB'
                const textColor = isDarkTheme ? 'white' : 'black'
                const iconContainer = isDarkTheme ? 'black' : '#D7DFE9'




                return (

                    <>
                        {homeVideosList.length > 0 ? (
                            <VideosContainer>
                                {homeVideosList.map(eachVideo => (

                                    <HomeVideoCard video={eachVideo} key={eachVideo.id} />

                                ))}
                            </VideosContainer>) : (

                            <NoSavedVideoView>
                                <NoSaveImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" alt="no videos" />

                                <p style={{ marginTop: 15, marginBottom: 3, fontSize: 14, color: `${textColor}`, fontSize: 25 }}> No Search results found</p>
                                <p style={{ marginTop: 8, marginBottom: 3, fontSize: 14, color: 'gray', fontSize: 18 }}> Try different keywords or remove search filter</p>

                            </NoSavedVideoView>
                            ) }
                    </>

                )
            }}

        </ThemeAndVideoContext.Consumer >
    )

}




export default HomeVideos