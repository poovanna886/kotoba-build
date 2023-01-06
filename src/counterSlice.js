import { createSlice } from '@reduxjs/toolkit'
import words from './assets/data'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: words
  },
  reducers: {
    
    addNewWord: (state, action) => {
      state.value.push(action.payload)
    },

    removeWord: (state, action) => {
       return{
       ...state,
       value: state.value.filter((item, index) => item.id != action.payload)
       
     }
    //state.value.pop()
   
  }
  }
})

export const selectWords = (state) => state.counter.value


// Action creators are generated for each case reducer function
export const { addNewWord, removeWord } = counterSlice.actions

export default counterSlice.reducer