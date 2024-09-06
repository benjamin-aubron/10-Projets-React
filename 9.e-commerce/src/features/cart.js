import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  cartItems: [

  ]
}

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createCartItem: (state, action) => {
      state.cartItems.push(action.payload)
    }
  }
})

export function addOneToCart(action){
  return function(dispatch, getState){
    const storeState = getState()

    
  }
}