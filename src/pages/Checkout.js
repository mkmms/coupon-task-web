import {
  useEffect
} from 'react'
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { useError } from "../hooks/errorContext";
import api from '../helpers/apis'
import useAppContext from "../hooks/appContext";

const Cart = () => {

  const { setErrorMsg } = useError();
  const { cart, setCart } = useAppContext();

  useEffect(() => {
    async function fetchData() {
      const response = await api.getCart()
      if (response.status === 200) {
        setCart(response.data.products)
      } else {
        setErrorMsg(response.error);
      }
    }

    fetchData()
  }, []);

  return (
    <Container className="py-5">
      <SectionHeading>Checkout</SectionHeading>
    </Container>
  );
};

export default Cart;
