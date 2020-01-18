/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Social from "./Social";

const AboutStyle = styled.div`
  text-align: center;
`;
const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;
const AboutAvatarImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 5px solid #071e22;
  ${"" /*  border: 5px solid red; */}
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rbga(0, 0, 0, 0.6);
`;
const AboutName = styled.div`
  text-align: center;
`;

const Abouth2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  color: #3f0f3f;
  margin: 0.5 0 0 0;
`;
const AboutProfession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing 1.6px;
  font-weight: 400;
  color: #3f0f3f;
`;

const AboutBio = styled.p`
  color: #1f262a;
  font-size: 1em;
  font-weight: 500;
`;

const AboutLocation = styled.p`
  color: #7a757a;
  font-size: 1em;
  font-weight: 400;
`;
const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <AboutAvatarImg src={avatar} alt={name} />
      </AboutAvatar>
      <AboutName>
        <Abouth2>{name}</Abouth2>
      </AboutName>
      <AboutProfession>{profession}</AboutProfession>
      <AboutBio>{bio}</AboutBio>
      <AboutLocation>{address}</AboutLocation>
      <div className="About-social">
        <Social social={social} />
      </div>
    </div>
  </AboutStyle>
);

export default About;
