
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState={
    todos:[]
}

export const getInitialState=createAsyncThunk("todo/getInitialState",
    //async(arg,thunkAPI)=>{
//    try{
//     const res= await axios.get("http://localhost:4100/api/todos")
    
//         console.log(res.data);
//         thunkAPI.dispatch(actions.setInitialState(res.data))

//     }catch(e){
//         console.log(e)
//     }
()=>{
    return axios.get("http://localhost:4100/api/todos");
}
)

export const addTodoAsync=createAsyncThunk("todo/addtodo",async(payload)=>{
const response=await fetch("http://localhost:4100/api/todos",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        text:payload,
        
    })

})
return response.json()    
})



//reducer using redux toolkit
const todoSlice=createSlice({
    name:"todo",
    initialState:initialState,
    reducers:{
      
        add:(state,action)=>{
            state.todos.push({
                text:action.payload,
                completed:false
            })
        },
        toggle:(state,action)=>{
            state.todos.map((todo,i)=>{
                if(i==action.payload){
                    todo.completed=!todo.completed
                }
                return todo
            })
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getInitialState.fulfilled,(state,action)=>{
            state.todos=[...action.payload.data]
        })
        .addCase(addTodoAsync.fulfilled,(state,action)=>{
            console.log("addddd")
            console.log(action.payload)
            state.todos.push(action.payload)
        })
    }
})

export  const todoReducer=todoSlice.reducer
export const actions=todoSlice.actions;

export const todoSelector=(state)=>state.todoReducer.todos


// export function todoReducer(state=initialState,action){
//     switch(action.type){
//         case ADD_TODO:
//             return {...state,todos:[...state.todos,{text:action.text,completed:false}]}
//         case TOGGLE_TODO:
//             return {...state,todos:state.todos.map((todo,i)=>{
//                 if(i==action.index){
//                     todo.completed=!todo.completed
//                 }
//                 return todo;
//             })}
//         default:
//             return state
//         }
// }