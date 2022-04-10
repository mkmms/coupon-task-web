import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import CouponForm from "../../components/coupon/CouponForm";
import Heading2 from "../../components/Heading2";
import apis from "../../helpers/apis";
import { useError } from "../../hooks/errorContext";

const EditCoupon = () => {
  const navigate = useNavigate();
  const params = useParams()
  const { setNoticeMsg, setErrorMsg } = useError()
  const [coupon, setCoupon] = useState(null)

  useEffect(() => {
    const fetchCoupons = async () => {
      const response = await apis.getCoupon(params.couponId);
      if (response.status === 200) {
        setCoupon(response.data);
      } else {
        setErrorMsg(response.error);
      }
    };

    fetchCoupons();
  }, []);

  const handleSubmit = async (data) => {
    const response = await apis.updateCoupon(coupon.id, data);
    if (response.status === 200) {
      setNoticeMsg("Coupon has been updated!");
      navigate("/coupons");
    } else {
      setErrorMsg(response.error);
    }
  };

  if( !coupon ) return false

  return (
    <Container>
      <div className="py-5">
        <div className="row d-flex py-5 justify-content-center">
          <div className="col-sm-4">
            <Heading2>Edit a Coupon</Heading2>
            <CouponForm handleSubmit={handleSubmit} coupon={coupon}/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditCoupon;
