import styled from "styled-components";
import Button from "./Button";

const ProductWrapper = styled.div`
  border: 1px solid #f7f7f5;
  overflow: hidden;
  margin-bottom: 30px;
  font-family: "Roboto", sans-serif;
  .single-products {
    position: relative;
    .productinfo {
      position: relative;
      text-align: center;
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
      h2 {
        color: #fe980f;
        font-family: "Roboto", sans-serif;
        font-size: 24px;
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      p {
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #696763;
      }
    }
  }
  .choose {
    border-top: 1px solid #f7f7f0;
    .nav-justified {
      width: 100%;
      li a {
        color: #b3afa8;
        font-family: "Roboto", sans-serif;
        font-size: 13px;
        padding: 5px 5px;
        display: inline-block;
        text-decoration: none;
        svg {
          margin-bottom: 2px;
          margin-right: 3px;
        }
      }
    }
  }
`;

const ProductCard = ({
  product,
  handleAddToCart,
  isAdmin
}) => {
  return (
    <ProductWrapper>
      <div className="single-products">
        <div className="productinfo text-center">
          <img
            src={product.img}
            alt=""
          />
          <h2>{product.price}</h2>
          <p>{product.name}</p>
          {
            !isAdmin ? (
              <Button onClick={() => {
                handleAddToCart(product.id) 
              }}>
                <i className="fa fa-shopping-cart"></i>Add to cart
              </Button>
            ) : false
          }
          <br />
          <br />
        </div>
      </div>
    </ProductWrapper>
  );
};

export default ProductCard;
