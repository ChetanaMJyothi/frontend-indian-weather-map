import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stateName: "",
  cityName: "",
}

export const validSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    stateStore: (state, action) => {
      state.stateName = action.payload;
      console.log(state.stateName);
    },
    cityStore: (state, action) => {
      state.cityName = action.payload;
      console.log(state.cityName);
    },
   
  },
})
export const { stateStore, cityStore } = validSlice.actions

export default validSlice.reducer