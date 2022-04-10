import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

import apis from "../../helpers/apis";
import Input from "../form/Input";
import Button from "../Button";
import Heading2 from "../Heading2";

import { useError } from "../../hooks/errorContext";

const signupSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
  password_confirmation: yup
    .string()
    .required()
    .min(5)
    .oneOf([yup.ref("password")]),
});

const SignupForm = () => {
  const { setNoticeMsg, setErrorMsg } = useError();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      const response = await apis.signup(values);
      if (response.status === 200) {
        setNoticeMsg("User has been created!, please login to continue");
        formik.resetForm();
      } else {
        setErrorMsg(response.error);
      }
    },
  });

  return (
    <div className="signup-form">
      <Heading2>New User Signup!</Heading2>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          isValid={formik.touched.name && !formik.errors.name}
          isInvalid={formik.touched.name && formik.errors.name}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          isValid={formik.touched.email && !formik.errors.email}
          isInvalid={formik.touched.email && formik.errors.email}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          isValid={formik.touched.password && !formik.errors.password}
          isInvalid={formik.touched.password && formik.errors.password}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="password_confirmation"
          onChange={formik.handleChange}
          value={formik.values.password_confirmation}
          isValid={
            formik.touched.password_confirmation && !formik.errors.password_confirmation
          }
          isInvalid={
            formik.touched.password_confirmation && formik.errors.password_confirmation
          }
        />
        <Button type="submit" variant="primary">
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default SignupForm;
