export const ADD_TODO="ADD Todo";
export const TOGGLE_TODO="Toggle Todo";

export const addTodo=(text)=>({text:text,type:ADD_TODO});
export const toggleTodo=(index)=>({index,type:TOGGLE_TODO});

