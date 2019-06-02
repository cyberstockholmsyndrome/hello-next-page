import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  background: hotpink;
  color: white;
  font-family: sans-serif;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 250ms ease-in-out, transform 150ms ease;
  margin-top: 2em;

  :hover,
  :focus {
    background-color: #ff1e8f;
  }

  :focus {
    outline: 2px solid white;
    outline-offset: -4px;
  }

  :active {
    transform: scale(0.99);
  }
`;

function Button(props) {
  return (
    <StyledContainer>
      <StyledButton onClick={props.click}>{props.text}</StyledButton>{" "}
    </StyledContainer>
  );
}

export default Button;
