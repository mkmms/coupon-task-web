import styled from "styled-components";
import { Form } from "react-bootstrap";

const StyledSelect = styled(Form.Select)`
  &,
  &:focus {
    background-color: #f0f0e9;
    border: medium none;
    color: #696763;
    display: block;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 300;
    height: 40px;
    margin-bottom: 10px;
    outline: medium none;
    padding-left: 10px;
    width: 100%;
    border-radius: 0px;
  }
`;

const SelectInput = (props) => {
  const options = props.options || [{ label: "Select", value: "" }];
  return (
    <StyledSelect {...props}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default SelectInput;
