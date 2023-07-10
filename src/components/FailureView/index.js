import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import { FailureViewContainer, FailImage, FaileHeading, FaileNoteText, RetryButton } from './styledComponents'


const FailureView = (props) => {
    const { onRetry } = props


    const onClickRetry = () => {
        onRetry()
    }

    return (
        <ThemeAndVideoContext.Consumer>

            {value => {
                const { isDarkTheme } = value


                const failureImageUrl = isDarkTheme?'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png':'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                const textColor=isDarkTheme?'white':'gray'

                return (
                    <FailureViewContainer>
                        <FailImage src={failureImageUrl} />
                        <FaileHeading style={{color:`${textColor}`}}> Oops! Something Went Wrong</FaileHeading>
                        <FaileNoteText style={{color:`${textColor}`}}> We are having some trouble to complete your request. <br /> Please
                            try again later.</FaileNoteText>

                        <RetryButton type='button' onClick={onClickRetry}>Retry</RetryButton>

                    </FailureViewContainer>
                )
            }}
        </ThemeAndVideoContext.Consumer>
    )
}


export default FailureView


