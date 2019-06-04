import styled from "styled-components";

const Heading = styled.h1`
  font-size: 6em;
  text-align: center;
`;

const Title = props => <Heading>{props.title}</Heading>;

export default Title;
