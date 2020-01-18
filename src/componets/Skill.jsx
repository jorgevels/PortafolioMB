import React from "react";
import styled, { keyframes } from "styled-components";
import H2Styled from "../Styled/H2Styled";

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 0.5em;
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Skillsh5 = styled.h5`
  margin: 0.5em 0;
`;
const SkillsLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background: #b29fb2;
`;
const move = keyframes`
  0% { background-position 0 0;}
  100% {background-position: 50px 50px }
`;

const SkillsSpan = styled.span`
  display: block;
  height: 100%;
  width: ${props => props.width};
  border-radius: 8px;
  ${"" /* background-color: #3f0f3f; */}
  background-color: green;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    z-index: 1;
    background-size: 50px 50px;
    animation: ${move} 4s linear infinite;
    overflow: hidden;
  }
`;

const Skill = props => (
  <div className="Skills">
    <H2Styled name="Habilidades" />
    <SkillsContainer>
      {props.data.map((skill, index) => (
        <div className="Skill-item" key={`skill-${index}`}>
          <Skillsh5>{skill.name}</Skillsh5>
          <SkillsLine>
            <SkillsSpan width={skill.percentage} />
          </SkillsLine>
        </div>
      ))}
    </SkillsContainer>
  </div>
);

export default Skill;
