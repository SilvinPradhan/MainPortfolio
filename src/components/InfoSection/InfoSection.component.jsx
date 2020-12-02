import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../GlobalStyles'
import { InfoSect, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, SubTitle, ImgWrapper, Img } from './InfoSection.elements'
import img from "../../images/info1.png"
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

const InfoSection = ({ primary, lightBg, imgStart, lightTextDesc, lightTopline, buttonLabel, description, headLine, lightText, topLine, start, alt }) => {
    return (
        <>
            <InfoSect lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopline={lightTopline}><span><WarningRoundedIcon style={{ color: "#f5bf42" }} /></span>{topLine}<WarningRoundedIcon style={{ color: "#f5bf42" }} /></TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} type="image/svg" alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSect>
        </>
    )
}

export default InfoSection
