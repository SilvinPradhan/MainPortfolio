import React from 'react'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput } from './Footer.elements'
import { Button } from "../../GlobalStyles"

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
                        <FooterImage>
                            <img src="" type="image/png" alt=""></img>
                        </FooterImage>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterContainer >
    )
}

export default Footer
