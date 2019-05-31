import React from "react";
import styled from "styled-components";

import Layout from "../layout/Layout";

import Header from "../components/Header";

const StyledWrapper = styled.div``;

const Title = styled.h1`
  font-size: 6em;
  text-align: center;
`;

const Index = () => (
  <>
    <Layout />
    <StyledWrapper>
      <Header />
      <Title>Hello Next.js</Title>
    </StyledWrapper>
  </>
);

export default Index;
