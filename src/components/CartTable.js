import styled from "styled-components";
import { Table } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

const StyledTable = styled(Table)`
  margin: 3rem 0rem;
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

const SecondaryPrice = styled.p`
  color: #696763;
  font-size: 18px;
`;

const ProductLink = styled.h4`
  a {
    color: #363432;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: normal;
  }
`;

const RemoveLink = styled.a`
  background: #f0f0e9;
  color: #ffffff;
  padding: 5px 7px;
  font-size: 16px;
  cursor: pointer;
`;

const CartTable = ({
  cartItems,
  removeCartItem
}) => {

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Item</th>
          <th></th>
          <th>Price</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cart, index) => {
          return (
            <tr key={index}>
              <td>
                <a>
                  <img src={cart.img} alt={cart.name} style={{ maxWidth: "200px" }}/>
                </a>
              </td>
              <td>
                <ProductLink>
                  <a>{cart.name}</a>
                </ProductLink>
              </td>
              <td>
                <SecondaryPrice>Rs.{cart.price.toFixed(2)}</SecondaryPrice>
              </td>
              <td>
                <SecondaryPrice>{cart.total.toFixed(2)}</SecondaryPrice>
              </td>
              <td>
                <RemoveLink onClick={() => removeCartItem(cart.id) }>
                  <FaTimes />
                </RemoveLink>
              </td>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default CartTable;
