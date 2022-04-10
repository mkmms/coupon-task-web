import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import CouponForm from "../../components/coupon/CouponForm";
import Heading2 from "../../components/Heading2";
import apis from "../../helpers/apis";
import { useError } from "../../hooks/errorContext";

const CreateCoupon = () => {
  const navigate = useNavigate();
  const { setNoticeMsg, setErrorMsg } = useError();
  const handleSubmit = async (data) => {
    const response = await apis.postCreateCoupon(data);
    if ([200, 201].includes(response.status)) {
      setNoticeMsg("Coupon has been created!");
      navigate("/coupons");
    } else {
      setErrorMsg(response.error);
    }
  };

  return (
    <Container>
      <div className="py-5">
        <div className="row d-flex py-5 justify-content-center">
          <div className="col-sm-4">
            <Heading2>Create a Banner</Heading2>
            <CouponForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateCoupon;
