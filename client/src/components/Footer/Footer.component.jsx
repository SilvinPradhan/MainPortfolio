import React from 'react'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle } from './Footer.elements'
import { Button } from "../../GlobalStyles"
import { ImgWrapper } from '../InfoSection/InfoSection.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    To get in touch with me, please follow the following link.
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Enter Email Address" />
                    <Button fontBig>Get In Touch</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Me
                        </FooterLinkTitle>
                        <ImgWrapper>
                            <img src="" type="image/svg" alt="" />
                        </ImgWrapper>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterContainer >
    )
}

export default Footer
