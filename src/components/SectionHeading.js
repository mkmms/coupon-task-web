import styled from "styled-components";
import PropTypes from "prop-types";

const H2 = styled.h2`
  color: #fe980f;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 15px;
  text-transform: uppercase;
  margin-bottom: 30px;
  position: relative;
  text-align: left;
`;

const SectionHeading = ({ children }) => {
  return <H2>{children}</H2>;
};

SectionHeading.propTypes = {
  children: PropTypes.node,
};

export default SectionHeading;
