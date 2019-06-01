import { withRouter } from "next/router";
import styled from "styled-components";

import Layout from "../layout/Layout";

import Header from "../components/Header";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

const StyledWrapper = styled.div``;

const Page = withRouter(props => (
  <>
    <Layout />
    <StyledWrapper>
      <Header />
      <Title title={props.router.query.title} />
      <Paragraph text="This is the blog post content." />
    </StyledWrapper>
  </>
));

export default Page;
