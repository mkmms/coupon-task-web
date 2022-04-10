import {
  useState,
  useEffect
} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import CartTable from "../components/CartTable";
import Container from "../components/Container";

import api from '../helpers/apis';
import { useError } from "../hooks/errorContext";
import useAppContext from "../hooks/appContext";
import SectionHeading from '../components/SectionHeading';
import CartTotal from '../components/CartTotal';
import AvailableCoupons from '../components/AvailableCoupons';
import Button from '../components/Button';

const Cart = () => {

  const { setNoticeMsg, setErrorMsg } = useError()
  const { cart, setCart } = useAppContext();
  const [ coupons, setCoupons ] = useState([]);
  const [ appliedCoupon, setAppliedCoupon ] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await api.getCart()
      if (response.status === 200) {
        setCart(response.data.products)
      } else {
        setErrorMsg(response.error);
      }
      
      const couponResponse = await api.getCoupons()
      if (couponResponse.status === 200) {
        setCoupons(couponResponse.data)
      } else {
        setErrorMsg(couponResponse.error);
      }
    }

    fetchData()
  }, []);

  const removeCartItem = async (id) => {
    const response = await api.removeCartItem(id)
    if (response.status === 200) {
      let cartItems = cart.filter((c) => c.id !== id)
      setCart(cartItems)
    } else {
      setErrorMsg(response.error);
    }
  }

  const applyCoupon = async (couponCode) => {
    const response = await api.applyCoupon(couponCode)
    if (response.status === 200) {
      setAppliedCoupon(response.data)
    } else {
      setErrorMsg(response.error);
    }
  }

  const confirmOrder = async () => {
    const response = await api.confirmOrder(appliedCoupon)
    if (response.status === 200) {
      setNoticeMsg("Your order received")
      navigate("/");
    } else {
      setErrorMsg(response.error);
    }
  }

  return (
    <Container className="pt-5">
      {
        cart.length > 0 ? (
          <div className='row'>
            <div className="col-md-9">
              <SectionHeading>Cart</SectionHeading>
              <CartTable cartItems={cart} removeCartItem={(id) => removeCartItem(id)}/>
            </div>
            <div className="col-md-3">
              <SectionHeading>Checkout</SectionHeading>
              <CartTotal cartItems={cart} appliedCoupon={appliedCoupon}/>
              <AvailableCoupons coupons={coupons} applyCoupon={applyCoupon}/>
            </div>
          </div>
        ) : (
          <h1 className="py-5 mt-5 text-center">Cart is empty!</h1>
        )
      }
      {
        cart.length > 0 ? (
          <div className='py-5 text-center'>
            <Button variant="primary" onClick={ ()=> confirmOrder() }>Confirm Order</Button>
          </div>
        ) : false
      }
    </Container>
  );
};

export default Cart;
