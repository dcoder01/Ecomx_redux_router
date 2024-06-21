import {createSlice} from '@reduxjs/toolkit'

const initialState={
    cartItems:[],

}
export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtoCart:(state, action)=>{
            state.cartItems.push(action.payload)
        },
    }

})

export const {addtoCart}=cartSlice.actions

export default cartSlice.reducer
