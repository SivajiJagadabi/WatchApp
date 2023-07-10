import Header from '../Header'
import Sidebar from '../Sidebar'
import { FailureViewContainer, FailImage, FaileHeading, FaileNoteText, RetryButton } from './styledComponents'



const NotFound = () => {


    const notFoundImage = `https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png`

    return (
        <>
            <Header />
            <Sidebar />
            <FailureViewContainer>
                <FailImage src={notFoundImage} />
                <FaileHeading> Page Not Found</FaileHeading>
                <FaileNoteText> We are sorry, the page you requested could not be found..</FaileNoteText>

            </FailureViewContainer>
        </>
    )
}


export default NotFound