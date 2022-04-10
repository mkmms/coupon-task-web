import styled from "styled-components";
import { Form } from "react-bootstrap";

const StyledTextArea = styled(Form.Control)`
  &,
  &:focus {
    background-color: #f0f0e9;
    border: medium none;
    color: #696763;
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 10px;
    outline: medium none;
    padding-left: 10px;
    width: 100%;
    border-radius: 0px;
  }
`;

const TextAreaInput = (props) => {
  return <StyledTextArea {...props} as="textarea"></StyledTextArea>;
};

export default TextAreaInput;
