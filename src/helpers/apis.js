import { httpGet, httpPost, httpDelete, httpPut } from "./axiosInstance";

const apis = {
  login: async (user) => {
    return await httpPost("/auth/sign_in", user);
  },

  signup: async (user) => {
    return await httpPost("/auth", user);
  },

  getProducts: async () => {
    return await httpGet("/products")
  },

  postAddToCart: async (id) => {
    return await httpPost("/carts", {id: id})
  },

  getCart: async () => {
    return await httpGet("/carts")
  },

  removeCartItem: async (id) => {
    return await httpDelete(`/carts/${id}`)
  },

  getCoupons: async () => {
    return await httpGet('/coupons')
  },

  getCoupon: async (id) => {
    return await httpGet(`/coupons/${id}`)
  },

  postCreateCoupon: async (params) => {
    return await httpPost(`/coupons`, {
      coupon: {
        ...params
      }
    })
  },

  updateCoupon: async (id, params) => {
    return await httpPut(`/coupons/${id}`, {
      coupon: {
        ...params
      }
    })
  },

  deleteCoupon: async (id) => {
    return await httpDelete(`/coupons/${id}`)
  },

  changeCouponStatus: async (id) => {
    return await httpPost(`/coupons/${id}/update_status`)
  },

  applyCoupon: async (couponCode) => {
    return await httpPost(`/coupons/apply`, {
      coupon_code: couponCode
    })
  },

  confirmOrder: async (payload) => {
    return await httpPost('/carts/confirm_order', {
      ...payload
    })
  }
};

export default apis;
