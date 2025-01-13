import { GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 29px;
  font-weight: 900;
  color: ${({ theme }) => theme.primary + 97};
`;
const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavLink = styled.a`
  text-decoration: none;
  margin: 12px;
  font-size: 17px;
  color: ${({ theme }) => theme.text_primary + 67};
  @media (max-width: 768px) {
    margin: 10px;
    font-size: 14px;
  }
`;
const SocialIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  margin: 14px;
  font-size: 17px;
`;
const Copyright = styled.div`
  color: ${({ theme }) => theme.text_primary + 67};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Title>Ashish</Title>
      <NavBar>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#education">Education</NavLink>
      </NavBar>
      <SocialIcons>
        <Icon>
          <NavLink
            target="_blank"
            href="https://www.linkedin.com/in/ashish-singh-090b7121b/"
          >
            <LinkedIn style={{ color: "white" }} />
          </NavLink>
        </Icon>
        <Icon>
          <NavLink target="_blank" href="https://github.com/ashishbibiyan07">
            <GitHub style={{ color: "white" }} />
          </NavLink>
        </Icon>
      </SocialIcons>
      <Copyright>© 2024 Ashish. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
