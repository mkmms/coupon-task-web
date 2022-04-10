import { useState, useEffect } from "react";
import Container from "../../components/Container";
import SectionHeading from "../../components/SectionHeading";
import { useError } from "../../hooks/errorContext";
import apis from "../../helpers/apis";
import ButtonStyledLink from "../../components/ButtonStyledLink";
import CouponList from "../../components/coupon/CouponList";

const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  const { setErrorMsg } = useError();

  useEffect(() => {
    const fetchCoupons = async () => {
      const response = await apis.getCoupons();
      if (response.status === 200) {
        setCoupons(response.data);
      } else {
        setErrorMsg(response.error);
      }
    };

    fetchCoupons();
  }, []);

  const changeStatus = async (id) => {
    const response = await apis.changeCouponStatus(id);
    if (response.status === 200) {
      let updatedCoupons = coupons.map((coupon) => {
        if( coupon.id !== id ) return coupon

        return response.data
      })
      setCoupons(updatedCoupons);
    } else {
      setErrorMsg(response.error);
    }
  }

  const deleteCoupon = async (id) => {
    const response = await apis.deleteCoupon(id);
    if (response.status === 204) {
      let updatedCoupons = coupons.filter((coupon) => coupon.id !== id)
      setCoupons(updatedCoupons);
    } else {
      setErrorMsg(response.error);
    }
  } 

  return (
    <Container className="pt-5">
      <SectionHeading>Coupons</SectionHeading>
      <div className="text-end pb-3">
        <ButtonStyledLink to="/coupons/new">Create Coupon</ButtonStyledLink>
      </div>
      <CouponList coupons={coupons} changeStatus={changeStatus} deleteCoupon={deleteCoupon}/>
    </Container>
  );
};

export default Coupons;
