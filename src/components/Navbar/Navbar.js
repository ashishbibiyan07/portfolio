import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
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
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @miedia screen and (max-width:640px) {
    padding: 0 0px;
  }
`;
const MobileIcon = styled.div`
  display: none;
  color: white;
  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 22px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_praimary};
  }
`;
const NavItems = styled.ul`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  letter-spacing: 1.3px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
const GithubButton = styled.a`
  background-color: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 0px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  heigth: 70%;
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 13px;
  }
`;
const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 21px;
`;
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "1000" : "-1000")};
`;
const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;
const PortfolioIcon = styled.img`
  width: 28px;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to={"/"}>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "10px",
              cursor: "pointer",
              textDecoration: "none",
            }}
            href="#about"
          >
            <PortfolioIcon src="https://cdn-icons-png.flaticon.com/128/1089/1089559.png" />
            <Span>
              Port
              <span style={{ color: "#8939bf", fontSize: "25px" }}>folio</span>
            </Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>

          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
        {open && (
          <MobileMenu open={open}>
            <MobileLink
              href="#about"
              onClick={() => {
                setOpen(!open);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Education
            </MobileLink>
            <GithubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
