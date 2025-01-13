import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/IMG_20230810_190745.jpg";
import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation";

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 93vh;
  display: flex;
  position: relative;
  padding: 80px 115px;
  @media and screen (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
    height: 110vh;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
position:absolute;
display:flex;
justify-content:end;
top:0;
bottom:0;
left:0;
left:0;

width:100%;
height:100%;
max-width:1360px;
overflow:hidden;
padding 0 30px;
 top:50%;
  left:50%;
-webkit-transform: translateX(-50%) translateY(-50%) ;
transform: translateX(-50%) translateY(-50%);
@media screen and (max-width:960px){
  padding:0 0px;
 
  justify-content:center;
}

`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 80px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
const TextLoop = styled.div`
  font-size: 38px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 12px;
  display: flex;

  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
const SubTitle = styled.div`
  font-size: 20px;

  color: ${({ theme }) => theme.text_primary + 95};
  line-height: 32px;
  margin-bottom: 42px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`

 -webkit-appearance: button;
  -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    max-height: 400px;
    max-width: 400px;
  }
  @media screen and (max-width: 640px) {
    max-height: 300px;
    max-width: 280px;
  }
`;
const HeroSection = () => {
  return (
    <HeroContainer id="about">
      <HeroBg>
        <HeroBgAnimation />
      </HeroBg>
      <HeroInnerContainer>
        <HeroLeftContainer>
          <Title>
            Hi, I am <br /> {Bio.name}
          </Title>
          <TextLoop>
            I am a
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
          <ResumeButton href={Bio.resume} target="_blank">
            Check Resume
          </ResumeButton>
        </HeroLeftContainer>
        <HeroRightContainer>
          <Image src={HeroImg} alt="HeroImg" loading="lazy" />
        </HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default HeroSection;
