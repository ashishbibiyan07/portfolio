import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../../cards/ProjectCard";
import { projects } from "../../data/constants";
const Container = styled.div`
  display: flex;
  background: linear-gradient(
    343.07deg,
    rgba(132, 58, 204, 0.5) 5.61%,
    rgba(132, 59, 203, 0) 64.3%
  );
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding:10px; 0px 100px 0;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;
export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;
const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of my projects.</Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value={"all"} onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}

          <Divider />
          {toggle === "reactjs" ? (
            <ToggleButton
              value="reactjs"
              active
              onClick={() => setToggle("reactjs")}
            >
              React JS
            </ToggleButton>
          ) : (
            <ToggleButton value="reactjs" onClick={() => setToggle("reactjs")}>
              React JS
            </ToggleButton>
          )}

          <Divider />
          {toggle === "nextjs" ? (
            <ToggleButton
              value="nextjs"
              active
              onClick={() => setToggle("nextjs")}
            >
              Next JS
            </ToggleButton>
          ) : (
            <ToggleButton value="nextjs" onClick={() => setToggle("nextjs")}>
              Next JS
            </ToggleButton>
          )}

          <Divider />
          {toggle === "javascript" ? (
            <ToggleButton
              active
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              Javascript
            </ToggleButton>
          ) : (
            <ToggleButton
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              Javascript
            </ToggleButton>
          )}
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => <ProjectCard project={project} />)}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => {
              return <ProjectCard project={project} />;
            })}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
