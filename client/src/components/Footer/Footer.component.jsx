import React from 'react'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, WebsiteRights, FooterLink, SocialMedia, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMediaWrap } from './Footer.elements'
import { Button } from "../../GlobalStyles"
import { Img, ImgWrapper } from '../InfoSection/InfoSection.elements'
import Profile from "../../images/Profile.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa'


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
                            <Img src={Profile} type="image/svg" alt="" />
                        </ImgWrapper>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            About Me
                        </FooterLinkTitle>
                        <ImgWrapper>
                            <Img src={Profile} type="image/svg" alt="" />
                        </ImgWrapper>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>
                            Quick Links
                        </FooterLinkTitle>
                        <FooterLink to="/sign-up">About Me</FooterLink>
                        <FooterLink to="/projects">Projects</FooterLink>
                        <FooterLink to="/portfolio">Portfolio</FooterLink>
                        <FooterLink to="/resume">Resume</FooterLink>
                        <FooterLink to="/testimonials">Testimonials</FooterLink>
                        <FooterLink>Contact Me</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        Pradhan
                    </SocialLogo>
                    <WebsiteRights>Pradhan © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Discord">
                            <FaDiscord />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer >
    )
}

export default Footer
