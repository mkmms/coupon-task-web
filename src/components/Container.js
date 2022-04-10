import { Container as BootstrapContainer } from "react-bootstrap";

const Container = (props) => {
  return <BootstrapContainer {...props}>{props.children}</BootstrapContainer>;
};

export default Container;
