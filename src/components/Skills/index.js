import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';
import { motion, useScroll } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-width: 1400px;
  gap: 12px;
  margin-top: 30px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
  height: auto; /* Adjusted height */
  max-width: 1000px;
  margin-left: 50px;
  
`;

const Title = styled.div`
  font-size: 3rem;
  text-align: left;
  
  font-weight: 600;
    color: black;
    @media (max-width: 768px) {
  margin-top: 12px;
        font-size: 32px;
    }
`;

const Para = styled.div`
    font-size: 1.3rem;
    text-align: justify;
    margin-top: 40px;
    max-width: 650px;
    color: black;
    border: 5px solid black;
    border-radius: 10px;
  padding: 40px;
    @media (max-width: 768px) {
        font-size: 16px;
        padding: 20px;
    }
`;


const SkillsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #80ED99;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 50px 25px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #071C21;
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  background-color: #071C21;
  color: white;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px 20px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`



const Skills = () => {
  return (
    <Container id='skills'>
      <Wrapper>
        <TitleContainer>
          <Title>Hey, I'm Anuththara Perera</Title>
          <Para>I'm an aspiring software engineering student based in Sri lanka, with a passion for developing web and software solutions. <br/><br/> Beyond coding, I'm an avid learner who is eager to explore new technologies. </Para>
        </TitleContainer>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((skill) => (
                  <SkillItem>
                    <SkillImage src={skill.image}/>
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills