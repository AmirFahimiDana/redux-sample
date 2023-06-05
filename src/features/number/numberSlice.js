import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter } from "../counter/counterSlice";
const initialState={
    numberValue:5
}

const numberSlice = createSlice( {
    name:"number",
    initialState,
    reducers:{
        increment:(state) =>{ state.numberValue ++},
        decrement:(state) =>{ state.numberValue --}
    },
    //old version
    // extraReducers:{
    //     ["counter/increment"]:(state) => {
    //         state.numberValue ++
    //     }
    // }

    //new version
    extraReducers:(builder) => {
        builder.addCase(incrementCounter,(state,action) => {
            state.numberValue ++;
        })
    }
})

export default numberSlice.reducer;
export const {increment,decrement} = numberSlice.actions
export const selectNumber = (store) => store.number.numberValue
