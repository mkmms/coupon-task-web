import React from 'react'
import Button from './Button'

const AvailableCoupons = ({
  coupons = [],
  applyCoupon
}) => {
  return (
    <div>
      {
        coupons.map((coupon) => {
          return (
            <div key={coupon.id} className="card mb-4 rounded-0">
              <div className="card-body">
                <p className='text-muted'> Discount upto Rs.{coupon.max_amount} on minimum order of Rs.{coupon.min_amount}</p>
                <div className='d-flex justify-content-between'>
                  <strong>{coupon.coupon_code}</strong>
                  <Button variant="primary" onClick={() => applyCoupon(coupon.coupon_code) }>Apply</Button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default AvailableCoupons