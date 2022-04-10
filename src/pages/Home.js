import {
  useEffect
} from 'react'
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ProductCard from '../components/ProductCard';
import api from '../helpers/apis';
import { useError } from "../hooks/errorContext";
import useAppContext from "../hooks/appContext";

const Home = () => {
  const { setNoticeMsg, setErrorMsg } = useError();
  const { products, setProducts, setCart, auth } = useAppContext();

  useEffect(() => {
    async function fetchData() {
      const response = await api.getProducts()
      if (response.status === 200) {
        setProducts(response.data)
      } else {
        setErrorMsg(response.error);
      }
    }

    fetchData()
  }, []);

  const addToCart = async (id) => {
    const response = await api.postAddToCart(id)
    if (response.status === 200) {
      setCart(response.data)
      setNoticeMsg("Product added into the cart successfully")
    } else {
      setErrorMsg(response.error);
    }
  }

  return (
    <Container className="py-5">
      <SectionHeading>Products</SectionHeading>
      <div className='row'>
        {
          products.map((product) => {
            return (
              <div className='col-sm-4' key={product.id}>
                <ProductCard 
                  product={product} 
                  handleAddToCart={(id) => addToCart(id)}
                  isAdmin={auth.role === 1}
                />
              </div>
            )
          })
        }
      </div>
    </Container>
  );
};

export default Home;
