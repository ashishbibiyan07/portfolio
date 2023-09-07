import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  heigth: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 27% 99%, 0 100%);
  @media (max-width: 768px) {
    clip-path: polygon(0% 0%, 96% 0%, 99% 100%, 71% 98%, 0 100%);
  }
`;
const EducationWrapper = styled.div`
  width: 100%;
  //clip-path: polygon(20% 0%, 100% 0%, 89% 100%, 0% 100%);

  @media (max-width: 768px) {
    // clip-path: polygon(5% 0, 100% 0, 105% 100%, 0% 100%);
  }
`;
const FooterWrapper = styled.div``;
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects />
          <EducationWrapper>
            <Education />
          </EducationWrapper>
          <Contact />{" "}
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
