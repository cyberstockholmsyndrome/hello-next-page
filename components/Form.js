import { useState } from "react";
import styled from "styled-components";

import Button from "../components/Button";

const StyledContainer = styled.div`
  text-align: center;
  margin-top: 4em;
`;

const StyledForm = styled.form``;

const StyledInput = styled.input`
  text-align: center;
  width: 60%;
  border: none;
  font-size: 2em;
  color: white;
  background-color: black;
  font-family: "Helvetica";
  border-bottom: 2px solid white;
  padding-bottom: 4px;

  :focus {
    outline: none;
    border-bottom: 2px solid grey;
  }

  ::placeholder {
    color: white;
    transition: transform 0.4s ease-out, opacity 0.5s ease-in;
  }

  :focus::placeholder {
    opacity: 0;
    transform: translateX(20px);
  }

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

const Form = props => {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(value);
    setValue("");
    document.getElementById("input").focus();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledContainer>
        <StyledInput
          type="text"
          placeholder="Message:"
          value={value}
          onChange={handleChange}
          id="input"
        />
        <Button text="Emit message" click={handleSubmit} />
      </StyledContainer>
    </StyledForm>
  );
};

export default Form;
