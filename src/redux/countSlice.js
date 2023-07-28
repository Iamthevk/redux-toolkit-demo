import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers:{
        increment:(state,action) => {
            state.value += action.payload
        }
    }
})

 const counterReducer = counterSlice.reducer
 const {increment} = counterSlice.actions
 export {counterReducer,increment}