import styled from "styled-components";
import { Button as BootstrapButton } from "react-bootstrap";
import PropTypes from "prop-types";

const StyledButton = styled(BootstrapButton)`
  font-family: "Roboto", sans-serif;
  background: ${(props) =>
    props.variant === "primary" ? "#fe980f" : "#F5F5ED"};
  border-radius: 0;
  border: none;
  padding: 5px 15px;
  color: ${(props) => (props.variant === "primary" ? "#ffffff" : "#696763")};
  &:hover,
  &:active,
  &:focus {
    color: ${(props) => (props.variant === "primary" ? "#696763" : "#ffffff")};
    background-color: ${(props) =>
      props.variant === "primary" ? "#F5F5ED" : "#FE980F"};
    border-color: #adadad;
    text-decoration: none;
  }
  & + button {
    margin-left: 5px;
  }
`;

const Button = ({ children, variant, type = "button", onClick }) => {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string
};

export default Button;
