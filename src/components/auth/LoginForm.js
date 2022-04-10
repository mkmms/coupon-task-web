import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

import Input from "../form/Input";
import Heading2 from "../Heading2";
import Button from "../Button";

import useAppContext from "../../hooks/appContext";
import { useError } from "../../hooks/errorContext";
import apis from "../../helpers/apis";
import StyledLink from "../StyledLink";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

const LoginForm = () => {
  const { setLogin } = useAppContext();
  const { setErrorMsg } = useError();

  const handleLogin = async (user) => {
    const response = await apis.login(user);
    if (response.status === 200) {
      setLogin(true, {
        token: response.headers['access-token'],
        uid: response.headers['uid'],
        client: response.headers['client'],
        name: response.data.data.name,
        role: response.data.data.role
      });
    } else {
      setErrorMsg(response.error);
    }
  };

  return (
    <div className="login-form">
      <Heading2>Login to your account</Heading2>
      <Formik
        validationSchema={schema}
        onSubmit={handleLogin}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={values.email}
              isValid={touched.email && !errors.email}
              isInvalid={touched.email && errors.email}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={values.password}
              isValid={touched.password && !errors.password}
              isInvalid={touched.password && errors.password}
            />
            <Button type="submit" variant="primary">
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <StyledLink to="/reset-password" className="mt-3">
        Forgot Password?
      </StyledLink>
    </div>
  );
};

export default LoginForm;
