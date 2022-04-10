import { useState } from "react";
import styled from "styled-components";

const QuantityWrapper = styled.div`
  display: inline-flex;
`;

const QuantityButton = styled.button`
  background: #f0f0e9;
  color: #696763;
  display: inline-block;
  font-size: 18px;
  height: 28px;
  overflow: hidden;
  text-align: center;
  width: 35px;
  border: none;
`;

const QuantityField = styled.input`
  background: #fff;
  border: 1px solid #f0f0e9;
  color: #696763;
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
  height: 28px;
  outline: medium none;
  padding-left: 10px;
  border-radius: 0px;
  width: 40px;
  color: #696763;
  text-align: center;
`;

const QuantityInput = ({ onChange, value }) => {
  const [quantity, setQuantity] = useState(value || 1);

  const handleChange = (qty) => {
    setQuantity(+qty);
    onChange(+qty);
  };

  const handleClick = (type) => {
    if (type === "INC") {
      onChange(+quantity + 1);
      setQuantity(+quantity + 1);
    } else {
      onChange(+quantity - 1);
      setQuantity(+quantity - 1);
    }
  };

  return (
    <QuantityWrapper>
      <QuantityButton onClick={() => handleClick("INC")}>+</QuantityButton>
      <QuantityField
        onChange={(e) => handleChange(e.target.value)}
        value={quantity}
        type="number"
        min="0"
      />
      <QuantityButton onClick={() => handleClick("DEC")}>-</QuantityButton>
    </QuantityWrapper>
  );
};

export default QuantityInput;
