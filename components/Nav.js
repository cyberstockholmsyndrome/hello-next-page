import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Navigation = styled.nav`
  text-align: center;
  margin-bottom: 1em;
  margin-top: 6em;
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

const PostLink = props => (
  <Link prefetch as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <StyledLink>{props.title}</StyledLink>
  </Link>
);

const Nav = () => (
  <Navigation>
    <PostLink id="hello-nextjs" title="Hello Next.js" />
    <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
    <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
  </Navigation>
);

export default Nav;
