import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

import Input from "../form/Input";
import SelectInput from "../form/SelectInput";
import Button from "../Button";

const schema = yup.object().shape({
  coupon_code: yup.string().required(),
  max_count: yup.number().required(),
  max_amount: yup.number().required(),
  min_amount: yup.number().required(),
  status: yup.string().required(),
  discount_type: yup.string().required(),
  discount: yup.number().required(),
  expiry_date: yup.date().required()
});

const defaultValues = {
  coupon_code: "",
  max_count: "",
  max_amount: "",
  min_amount: "",
  status: "",
  discount_type: "",
  discount: "",
  expiry_date: ""
}

const CouponForm = (props) => {
  
  const formik = useFormik({
    initialValues: props.coupon || defaultValues,
    onSubmit: props.handleSubmit,
    validationSchema: schema,
  });

  return (
    <div className="login-form">
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          placeholder="Coupon Code"
          onChange={formik.handleChange}
          name="coupon_code"
          value={formik.values.coupon_code}
          isValid={formik.touched.coupon_code && !formik.errors.coupon_code}
          isInvalid={formik.touched.coupon_code && formik.errors.coupon_code}
        />
        <Input
          type="number"
          placeholder="Max use count"
          onChange={formik.handleChange}
          name="max_count"
          value={formik.values.max_count}
          isValid={formik.touched.max_count && !formik.errors.max_count}
          isInvalid={formik.touched.max_count && formik.errors.max_count}
        />
        <Input
          type="number"
          placeholder="Max discount amount"
          onChange={formik.handleChange}
          name="max_amount"
          value={formik.values.max_amount}
          isValid={formik.touched.max_amount && !formik.errors.max_amount}
          isInvalid={formik.touched.max_amount && formik.errors.max_amount}
        />
        <Input
          type="number"
          placeholder="Minimum Order Amount"
          onChange={formik.handleChange}
          name="min_amount"
          value={formik.values.min_amount}
          isValid={formik.touched.min_amount && !formik.errors.min_amount}
          isInvalid={formik.touched.min_amount && formik.errors.min_amount}
        />
        <SelectInput
          options={[
            {label: "Select Status", value: null}, 
            {label: "Active", value: 'active'}, 
            {label: "Inactive", value: 'inactive'}
          ]}
          onChange={formik.handleChange}
          name="status"
          value={formik.values.status}
          isValid={formik.touched.status && !formik.errors.status}
          isInvalid={formik.touched.status && formik.errors.status}
        />
        <SelectInput
          options={[
            {label: "Select Discount type", value: null}, 
            {label: "Flat", value: 'flat'}, 
            {label: "Percentage", value: 'percent'}
          ]}
          onChange={formik.handleChange}
          name="discount_type"
          value={formik.values.discount_type}
          isValid={formik.touched.discount_type && !formik.errors.discount_type}
          isInvalid={formik.touched.discount_type && formik.errors.discount_type}
        />
        <Input
          type="number"
          placeholder="Discount Amount"
          onChange={formik.handleChange}
          name="discount"
          value={formik.values.discount}
          isValid={formik.touched.discount && !formik.errors.discount}
          isInvalid={formik.touched.discount && formik.errors.discount}
        />
        <Input
          type="date"
          placeholder="Expiry Date"
          onChange={formik.handleChange}
          name="expiry_date"
          value={formik.values.expiry_date}
          isValid={formik.touched.expiry_date && !formik.errors.expiry_date}
          isInvalid={formik.touched.expiry_date && formik.errors.expiry_date}
        />
        <Button type="submit" variant="primary">
          { props.coupon ? 'Update' : 'Create'}
        </Button>
      </Form>
    </div>
  );
};

export default CouponForm;
