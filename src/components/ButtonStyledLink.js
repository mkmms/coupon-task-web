import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
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

const ButtonStyledLink = (props) => {
  return <StyledLink {...props} className="btn btn-primary" />;
};

export default ButtonStyledLink;
