//consumindo o store do reducer
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { cartActions } from './cart-slice'

export default function Cart(props) {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.watchlistSliceReducer) // Since the store has multiple reducers, we need to drill into the appropriate slice state.

  const addToCartHandler = () => {
    const dummyitem = {
      id: Math.random(),
      name: `Dummy Item ${Math.random()}`,
      price: 20 * Math.random(),
    }
    dispatch(cartActions.addItem(cartItem.dummyitem))
  }
  const removeFromCartHandler = (id) => {
    dispatch(cartActions.removeItem(id)) //Passing id as an argument to the reducer function.
  }

  return (
    <div>
      {selector.cart.length &&
        selector.cart.map((item) => {
          return (
            <div>
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.qty}</p>
              <button onClick={removeFromCartHandler}>Remove item</button>
            </div>
          )
        })}
      <h3>Total cart value:{selector.cart.total}</h3>
      <button onClick={addToCartHandler}>Add dummy item</button>
    </div>
  )
}