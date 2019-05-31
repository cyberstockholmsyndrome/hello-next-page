import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Layout from "../layout/Layout";

import Header from "../components/Header";

const StyledWrapper = styled.div``;

const Title = styled.h1`
  font-size: 6em;
  text-align: center;
`;

const StyledLink = styled.a`
  font-size: 2em;
  color: white;
  cursor: pointer;
  display: block;
  margin-bottom: 1em;

  :hover {
    color: hotpink;
  }
`;

const Nav = styled.nav`
  text-align: center;
  margin-bottom: 1em;
  margin-top: 3em;
`;

const PostLink = props => (
  <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <StyledLink>{props.title}</StyledLink>
  </Link>
);

const Index = () => (
  <>
    <Layout />
    <StyledWrapper>
      <Header />
      <Title>Hello Next.js</Title>
      <Nav>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </Nav>
    </StyledWrapper>
  </>
);

export default Index;
