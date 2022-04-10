import styled from "styled-components";
import Container from "../components/Container";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

const OrText = styled.h2`
  background: #fe980f;
  border-radius: 40px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  margin-top: 75px;
  text-align: center;
  width: 50px;
`;

const Login = () => {
  return (
    <Container>
      <div className="py-5">
        <div className="row d-flex py-5 justify-content-center">
          <div className="col-sm-4">
            <LoginForm />
          </div>
          <div className="col-sm-1">
            <OrText>Or</OrText>
          </div>
          <div className="col-sm-4">
            <SignupForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
