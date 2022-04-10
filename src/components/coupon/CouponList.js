import styled from "styled-components";
import { Table, Form } from "react-bootstrap";
import ButtonStyledLink from '../ButtonStyledLink'
import Button from '../Button'

const StyledTable = styled(Table)`
  margin: 0rem;
  vertical-align: middle;
  font-family: "Roboto", sans-serif;
  & > :not(caption) th {
    background: #fe980f;
    color: #fff;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
  }
  & > :not(:first-child) {
    border-top: 0px;
  }
`;

const CouponList = ({
  coupons,
  changeStatus,
  deleteCoupon
}) => {

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Coupon Code</th>
          <th>Status</th>
          <th>Discount</th>
          <th>Discount Type</th>
          <th>Max Discount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {coupons.map((coupon, index) => {
          return (
            <tr key={index}>
              <td>
                {coupon.coupon_code}
              </td>
              <td>
                <Form.Check 
                  type="switch"
                  id="custom-switch"
                  label={coupon.status}
                  checked={coupon.status === "active"}
                  onChange={ () => changeStatus(coupon.id) }
                />
              </td>
              <td>
                {coupon.discount}
              </td>
              <td>
                {coupon.discount_type}
              </td>
              <td>
                {coupon.max_amount}
              </td>
              <td>
                {
                  coupon.status !== "active" ? (
                    <>
                      <ButtonStyledLink to={`/coupons/${coupon.id}`}>
                        Edit
                      </ButtonStyledLink>
                      <Button onClick={() => deleteCoupon(coupon.id) }>
                        delete
                      </Button>
                    </>
                  ) : false
                }
              </td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default CouponList;
