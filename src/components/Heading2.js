import styled from "styled-components";
import PropTypes from "prop-types";

const H2 = styled.h2`
  color: #696763;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 30px;
`;

const Heading2 = ({ children }) => {
  return <H2>{children}</H2>;
};

Heading2.propTypes = {
  children: PropTypes.node,
};

export default Heading2;
