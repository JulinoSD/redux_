
const cartSlice = createSlice({
  name: 'Cart-slice',
  initialState: {
    cart: [],
    qty: 0,
    total: 0,
  },
  reducers: {
    addItem: (state, action)=>{
      state.cart.push(action.payload.cartItem),
      state.qty = action.payload.cartItem.qty,
      state.total = action.payload.cartItem.price * action.payload.cartItem.qty
    },
    removeItem: (state, action)=>{
      const itemIndex = state.cart.findIndex(
        (obj)=>obj.id === action.payload.id
      )
      if(itemIndex !== -1 && state.cart[itemIndex].qty >= 1){
        state.cart[itemIndex].qty -= 1
      }
    }
  }
})
export const cartActions = cartSlice.actions