import { useState } from "react";
import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";
import { Provider } from "react-redux";
import './App.css';
import {store} from "./redux/store";

import Home from "./components/Home/Home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
function App() {
  

  
const routes=createBrowserRouter([
  {path:"",element:<Home/>},
  {path:"todo",element:(
    <>
    <NavBar/>
    <h1>Todo s</h1>
    <TodoForm/>
    <TodoList/>
    </>
  )},
  {path:"notes",element:(
    <>
    <NavBar/>
    <h1>Notes</h1>
    <NoteForm/>
    <NoteList/>
    </>
  )}
])
  return (
    <div>
      <Provider store={store}>
       <RouterProvider router={routes}/>

      </Provider> 
    </div>
 
    
  );
}

export default App;
