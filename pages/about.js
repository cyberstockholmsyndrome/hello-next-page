import styled from "styled-components";

import Layout from "../layout/Layout";

import Header from "../components/Header";
import Paragraph from "../components/Paragraph";

const StyledWrapper = styled.div``;

const About = () => (
  <>
    <Layout />
    <StyledWrapper>
      <Header />
      <Paragraph text="This is the about page about the Next.js" />
    </StyledWrapper>
  </>
);

export default About;
