import React from 'react'
import styled, { useTheme } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Nav = styled.div`
    background-color: #fff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    z-index: 10;
    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        color: black;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavItems = styled.ul`
    width: 100%;
    gap: 32px;
    display: flex;
    justify-content: center;
    list-style: none;
    align-items: center;
    @media screen and (max-width: 748px) {
        display: none;
    }
`;

const NavLink = styled.a`
    color: green;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: blue;
    }
`;

const MobileMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    top: 80;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    transition: all 0.3s ease-in-out;
    transform: ${({ 
// @ts-ignore
    open }) => open ? "translateX(0)" : "translateX(100%)"};
    opacity: ${({ 
// @ts-ignore
    open }) => (open ? '1' : '0')};
    z-index: ${({ 
// @ts-ignore
    open }) => (open ? '1' : '0')};
    background-color: transparent;
    border-radius: 0 0 20 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;

const MobileMenuLink = styled(LinkR)`
    color: blue:
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: pink;
    }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  // @ts-ignore
  const theme = useTheme();
  return (
    <Nav>
        <NavContainer>
            <MobileIcon>
                <FaBars 
                 onClick={() => {
                    setOpen(!open);
                 }}
                />
            </MobileIcon>
            <NavItems>
                
                <NavLink href='#skills'>ME</NavLink>
                <NavLink href='#work'>My Work</NavLink>
                <NavLink href='#contact'>Get In Touch</NavLink>
            </NavItems>
        </NavContainer>
        {
            open && (
                <MobileMenu 
// @ts-ignore
                open={open}>
                    <MobileMenuLink 
// @ts-ignore
                    href="#about" onClick={() => {
                        setOpen(!open)
                    }}>ME</MobileMenuLink>
                    <MobileMenuLink 
// @ts-ignore
                    href='#skills' onClick={() => {
                        setOpen(!open)
                    }}>Skills</MobileMenuLink>
                    <MobileMenuLink 
// @ts-ignore
                    href='#work' onClick={() => {
                        setOpen(!open)
                    }}>My Work</MobileMenuLink>
                    <MobileMenuLink 
// @ts-ignore
                    href='#contact' onClick={() => {
                        setOpen(!open)
                    }}>Education</MobileMenuLink>
                </MobileMenu>
            )
        }
    </Nav>
  )
    
}

export default Navbar