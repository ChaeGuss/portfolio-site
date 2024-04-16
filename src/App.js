import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/Themes';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// @ts-ignore
import Skills from './components/Skills';
import Education from './components/Education';
import Work from './components/Work'
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './Contact';

const Body = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Education />
          </Wrapper>
          <Work />
          <Contact />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
