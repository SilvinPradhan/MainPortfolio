import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, MobileIcon, ProfilePic, NavIcon, NavLogo, NavMenu, NavLinks, NavItem, NavItemBtn, NavBtnLink } from './header.elements'
import Tooltip from '@material-ui/core/Tooltip'
import Profile from "../../images/Profile.jpg";
import { Button } from '../../GlobalStyles'

const Header = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon /> Pradhan
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {
                                click ? <FaTimes /> : <FaBars />
                            }
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/portfolio">Portfolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/about">About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/testimonials">Testimonials</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/resume">Resume</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {
                                    button ? (
                                        <NavBtnLink to="/sign-up">
                                            <Button primary>SIGN IN</Button>
                                        </NavBtnLink>
                                    ) : (
                                            <NavBtnLink to="/sign-up">
                                                <Button fontBig primary>SIGN UP</Button>
                                            </NavBtnLink>
                                        )
                                }
                            </NavItemBtn>
                        </NavMenu>
                        <Tooltip title="GhostDragon95" interactive>
                            <ProfilePic src={Profile} type="image/jpg" alt="Profile Pic" />
                        </Tooltip>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Header
