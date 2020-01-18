/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const SoftSkillStyle = styled.div`
  text-align: center;
`;
const SoftSkillsItem = styled.p`
  color: #1f262a;
  font-size: 1em;
  font-weight: 400;
`;
const SoftSkillH2 = styled.h2`
  margin: 0.2em 0 1em 0;
  font-weight: 400;
  color: #3f0f3f;
`;

const SoftSkills = props => (
  <SoftSkillStyle>
    <SoftSkillH2>SoftSkills</SoftSkillH2>
    <div className="Softskill-container">
      {props.data.map((soft, index) => (
        <div className="Softskill-item" key={`Soft-${index}`}>
          <SoftSkillsItem>{soft.name}</SoftSkillsItem>
        </div>
      ))}
    </div>
  </SoftSkillStyle>
);

export default SoftSkills;
