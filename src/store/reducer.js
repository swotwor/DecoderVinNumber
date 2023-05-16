import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  currentVin: [],
  historyList: [],
  vehicleVariablesList: [],
  currentVariableDiscription:{},
}

export const counterSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    addToHistoryList: (state, action) => {
      state.historyList.unshift(action.payload);
      state.historyList = state.historyList.slice(0, 5);
    },
    setVehicleVariablesList: (state, action) => {
      state.vehicleVariablesList = action.payload
    },
    setCurrentVin: (state, action) => {
      state.currentVin = state.historyList[action.payload]
    },
    setCurrentVariableDiscription: (state, action) => {
      state.currentVariableDiscription = {
        title: action.payload.variable,
        variableId: action.payload.variableId,
        value: action.payload.value
      }
    },
    setLoading: (state) => {
      state.loading = !state.loading
    }
  },
})

export const {
  setLoading,
  setCurrentVin,
  addToHistoryList,
  setVehicleVariablesList,
  setCurrentVariableDiscription,
} = counterSlice.actions

export default counterSlice.reducer;