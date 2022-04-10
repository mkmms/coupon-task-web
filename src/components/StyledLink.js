import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: #696763;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: inline-block;
  text-decoration: none;
  &:hover {
    color: #696763;
  }
`;

export default StyledLink;
