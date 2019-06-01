import React from "react";

import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  text-align: center;
  margin-bottom: 6em;
`;

const StyledLink = styled.a`
  font-size: 2em;
  color: white;
  cursor: pointer;

  :first-child {
    margin-right: 2em;
  }

  :hover {
    color: hotpink;
  }
`;

const Header = () => (
  <Nav>
    <Link prefetch href="/">
      <StyledLink>Home</StyledLink>
    </Link>
    <Link prefetch href="/about">
      <StyledLink>About</StyledLink>
    </Link>
  </Nav>
);

export default Header;
