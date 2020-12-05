import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  padding: 0.5rem calc((100vw-1300px) / 2);
  position: sticky;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  z-index: 999;
  box-shadow: 0 5px 5px 0 rgba(187, 187, 187, 0.1),
    0 0 7px 0 rgba(7, 34, 187, 0.1);
  color: #fff !important;
  top: 0;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  letter-spacing: 1.7px;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #212121;
  }
`;

export const NavItem = styled.li`
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.4s ease-in-out;
    }
  }
`;

export const ProfilePic = styled.img`
  display: none;
  align-items: center;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  object-fit: contain;
  object-position: 50% 50%;
  margin-top: 14.5px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 10%);
    width: 2.3em;
    height: 2.3em;
    margin-right: 40px;
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;