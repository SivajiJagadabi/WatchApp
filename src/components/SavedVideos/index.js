import { CgPlayListAdd } from 'react-icons/cg'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCard from '../VideoCard'
import { TrendingContainer, BgContainer, IconContainer, NoSavedVideoView, SavedVideoList, NoSaveImage } from './styledComponents'


const SavedVideos = () => (

    <ThemeAndVideoContext.Consumer>

        {value => {


            const { isDarkTheme, savedVideos } = value

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
                                <CgPlayListAdd style={{ color: 'red', fontSize: 30 }} />

                            </IconContainer>
                            <p style={{ fontSize: 23, fontWeight: 600, fontFamily: 'Roboto', marginLeft: 12, color: `${textColor}` }}>Saved Videos</p>
                        </BgContainer>

                        {savedVideos.length > 0 ? (
                            <SavedVideoList>
                                {savedVideos.map(eachVideo => (
                                    <VideoCard trendVideoDetails={eachVideo} key={eachVideo.id} />
                                ))}
                            </SavedVideoList>
                        ) : (
                            <NoSavedVideoView>
                                <NoSaveImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt="no saved videos"/>
                                    
                                    <p style={{ marginTop: 15, marginBottom: 3, fontSize: 14, color:`${textColor}`,fontSize:25 }}>No saved videos found</p>
                                    <p style={{ marginTop: 8, marginBottom: 3, fontSize: 14, color: 'gray',fontSize:18 }}>You can save your videos while watching them</p>

                            </NoSavedVideoView>

                        )}

                    </TrendingContainer>
                </>

            )
        }}
    </ThemeAndVideoContext.Consumer>
)


export default SavedVideos