import React from "react";
import styled from "styled-components";

import Layout from "../layout/Layout";

import Header from "../components/Header";

const StyledWrapper = styled.div``;

const Text = styled.p`
  font-size: 2em;
  text-align: center;
`;

const About = () => (
  <>
    <Layout />
    <StyledWrapper>
      <Header />
      <Text>This is the about page about the Next.js</Text>
    </StyledWrapper>
  </>
);

export default About;
