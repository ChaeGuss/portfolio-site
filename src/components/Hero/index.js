import React from 'react'
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  height: 80vh;
  margin-top: 20px;
  @media screen and (max-width: 960px){
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px){
    padding: 32px 16px;
  }
  z-index: 1;
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const HeroSecContainer = styled.div`
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

const HeroLeft = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 6rem;
  color: #80ED99;
  line-height: 68px;
  text-shadow:  3px 3px 3px black,
                -1px -1px 0 ;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const SubHeading = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.7rem;
  margin-top: 30px;
  display: flex;
  gap: 12px;
  color: #071C21;
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;


const HeroRight = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: center;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const FramerBlob = styled(motion.div)`
background: #BBBFCA;
  border-radius: 44% 56% 45% 55% / 55% 48% 52% 45% ;
  width 350px;
  height: 350px;
  box-shadow:  10px 10px 30px #BBBFCA,
                -10px -10px 30px #BBBFCA;
`;

const ResumeBtn = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 75%;
    max-width: 300px;
    text-align: center;
    margin-top: 50px;
    padding: 16px 0;
    color: Black;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: rgb(128,237,144);
background: -moz-linear-gradient(349deg, rgba(128,237,144,1) 35%, rgba(248,196,58,1) 100%);
background: -webkit-linear-gradient(349deg, rgba(128,237,144,1) 35%, rgba(248,196,58,1) 100%);
background: linear-gradient(349deg, rgba(128,237,144,1) 35%, rgba(248,196,58,1) 100%);
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

const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg></HeroBg>
        <HeroSecContainer>
          <HeroLeft>
            <Title>
              {Bio.brand}
            </Title>
            <SubHeading>
              DESIGNER & DEVELOPER
            </SubHeading>
            <ResumeBtn href={Bio.resume} target="display">
              Download Resume
            </ResumeBtn>
          </HeroLeft>
          <HeroRight>
            <FramerBlob animate={{ rotate: [0, 300, 200, 0]}} transition={{ repeat: Infinity, duration: 4}}>
              {" "}
            </FramerBlob>
            
          </HeroRight>
        </HeroSecContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero