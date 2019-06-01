import styled from "styled-components";

const Text = styled.p`
  font-size: 2em;
  text-align: center;
  margin-top: 2em;
`;

const Paragraph = props => <Text>{props.text}</Text>;

export default Paragraph;
