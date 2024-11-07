import { createSlice } from "@reduxjs/toolkit";
import { actions as todoActions } from "./todoReducer";
const initialState={
    message:""
}

const notificationSlice=createSlice({
    name:"notification",
    initialState,
    reducers:{
         clearNotification:(state)=>{
            state.message="";
         }
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(todoActions.add,(state,action)=>{
    //         state.message="Todo is created";

    //     })

    // }
    extraReducers:{
        [todoActions.add]:(state,action)=>{
            state.message="Todo is created"
        }

    }


    // extraReducers:{
    //     "todo/add":(state)=>{
    //         state.message="Todo is created";
             
    //     }
    // }
})

export const notificationReducer=notificationSlice.reducer

export const notificationSelector =(state)=>state.notificationReducer.message;

export const actions=notificationSlice.actions