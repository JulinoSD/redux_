import { authActions } from "./auth-slice";
import { cartActions } from "./cart-slice";
import { wathclistActions } from "./watch-slice";

const store = configureStore({
  reducer: {
    authSliceReducer: authActions.reducer,
    cartSliceReducer: cartActions.reducer,
    watchlistSliceReducer: wathclistActions
  }
})

export default store