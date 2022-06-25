const watchlistSlice = createSlice({
  name: 'Watchlist',
  initialState: '',
  reducers: {
    addItem: (state, action)=>{
      state.watchSlice.push(action.payload.watchListItem)
    },
    removeItem: (state, action) => {
      state.watchlist.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const wathclistActions = watchlistSlice.actions