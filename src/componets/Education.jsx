/* eslint-disable no-unused-vars */
import React from "react";
import H2Styled from "../Styled/H2Styled";
import H3Styled from "../Styled/H3Styled";
import H4Styled from "../Styled/H4Styled";
import PStyled from "../Styled/PStyled";
import SpanStyled from "../Styled/SpanStyled";

const Education = props => (
  <div className="<Education">
    <H2Styled name="Educación" />
    <div className="Education-container">
      {props.data.map((edu, index) => (
        <div className="Education-item" key={`Edu-${index}`}>
          <H3Styled>{edu.institution}</H3Styled>
          <H4Styled>{edu.degree}</H4Styled>
          <SpanStyled>
            {edu.startDate} - {edu.endDate}
          </SpanStyled>
          <PStyled name={edu.description} />
        </div>
      ))}
    </div>
  </div>
);

export default Education;
