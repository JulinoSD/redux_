//três propriedades do createSlice, name "nome do slice", initialState = true/false, reducers: (ation)=>{}
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state) =>{
      state.isLoggedIn = true
    },
    logout: (state)=>{
      state.isLoggedIn = false
    }
  }
})

export const authActions = authSlice.actions