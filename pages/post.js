import { withRouter } from "next/router";
import Layout from "../layout/Layout";
import styled from "styled-components";
import Header from "../components/Header";

const StyledWrapper = styled.div``;

const Title = styled.h1`
  font-size: 6em;
  text-align: center;
`;

const Text = styled.p`
  font-size: 2em;
  text-align: center;
  margin-top: 2em;
`;

const Page = withRouter(props => (
  <>
    <Layout />
    <StyledWrapper>
      <Header />
      <Title>{props.router.query.title}</Title>
      <Text>This is the blog post content.</Text>
    </StyledWrapper>
  </>
));

export default Page;
