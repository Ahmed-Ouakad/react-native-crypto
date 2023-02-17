import { createSlice } from "@reduxjs/toolkit";
export const coinSlice = createSlice({
    name : 'coin',
    initialState : {
        value : {},
       
    },
    reducers:{
        getCoin : (state,action) =>{
            state.value = action.payload
             
        },
        
    }
})
export const {getCoin} = coinSlice.actions
export default coinSlice.reducer