import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 4em;
  display: inline-block;

  @media only screen and (min-width: 768px) {
    font-size: 6em;
  }
`;

const Title = props => (
  <StyledWrapper>
    <Heading>{props.title}</Heading>
  </StyledWrapper>
);

export default Title;
