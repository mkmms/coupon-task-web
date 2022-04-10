import React from 'react'

const CartTotal = ({
  cartItems,
  appliedCoupon
}) => {

  const totalAmt = cartItems.reduce((init, next) => {
    return init + next.total
  }, 0)

  const gst = (totalAmt * 5/100)

  const netPayable = totalAmt + gst - (appliedCoupon ? appliedCoupon.amount * 1.0 : 0)

  return (
    <div>
      <ul className="list-group my-5 rounded-0">
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Base Price</h6>
          </div>
          <span className="text-muted">Rs. {totalAmt.toFixed(2)}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">GST 5%</h6>
          </div>
          <span className="text-muted">Rs. {gst.toFixed(2)}</span>
        </li>
        {
          appliedCoupon ? (
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Coupon code</h6>
                <small>{appliedCoupon.coupon_code}</small>
              </div>
              <span className="text-success">−Rs.{appliedCoupon.amount}</span>
            </li>
          ) : false
        }
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (INR)</span>
          <strong>Rs. {netPayable.toFixed(2)}</strong>
        </li>
      </ul>
    </div>
  )
}

export default CartTotal