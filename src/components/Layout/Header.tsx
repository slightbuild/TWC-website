import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import logo from '../../assets/walker-texas-chef-transparent.png';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.secondary};
  box-shadow: ${theme.shadows.md};
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 3px solid ${theme.colors.primary};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 128px;
  width: auto;
  background: transparent;

  @media (min-width: ${theme.breakpoints.tablet}) {
    height: 144px;
  }
`;

const LogoText = styled.h1`
  color: ${theme.colors.primary};
  font-size: 1.8rem;
  margin: 0;
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: ${theme.colors.secondary};
    flex-direction: column;
    padding: 5rem 2rem 2rem;
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform ${theme.transitions.normal};
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.white};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color ${theme.transitions.fast};
  position: relative;

  &:hover {
    color: ${theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.primary};
    transition: width ${theme.transitions.fast};
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MenuIcon = styled.div<{ isOpen: boolean }>`
  width: 25px;
  height: 20px;
  position: relative;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: ${theme.colors.primary};
    border-radius: 3px;
    transition: ${theme.transitions.fast};

    &:nth-child(1) {
      top: ${props => props.isOpen ? '8.5px' : '0'};
      transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      top: 8.5px;
      opacity: ${props => props.isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      top: ${props => props.isOpen ? '8.5px' : '17px'};
      transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LogoContainer to="/">
            <Logo src={logo} alt="Walker Texas Chef" />
            <LogoText>Walker Texas Chef</LogoText>
          </LogoContainer>

          <Nav isOpen={isMenuOpen}>
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/media" onClick={closeMenu}>Menu & Gallery</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </Nav>

          <MenuButton onClick={toggleMenu}>
            <MenuIcon isOpen={isMenuOpen}>
              <span></span>
              <span></span>
              <span></span>
            </MenuIcon>
          </MenuButton>
        </HeaderContent>
      </HeaderContainer>
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
};

export default Header;