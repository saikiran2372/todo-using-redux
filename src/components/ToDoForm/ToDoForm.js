import { useEffect, useState } from "react";
import "./ToDoForm.css";
import { useDispatch,useSelector } from "react-redux";
//import { addTodo } from "../../redux/actions/todoActions";
import { actions, addTodoAsync } from "../../redux/reducers/todoReducer";
import { notificationSelector } from "../../redux/reducers/notificationReducer";
import { actions as notificationActions } from "../../redux/reducers/notificationReducer";

function ToDoForm({ onCreateTodo }) {
  const [todoText, setTodoText] = useState("");
  const dispatch= useDispatch()
  const message=useSelector(notificationSelector)

  const handleSubmit = (e) => {
    e.preventDefault();
     
    dispatch(addTodoAsync(todoText))
    setTodoText("");
  };

  useEffect(()=>{
    if(message){
      const timer=setTimeout(()=>{
        dispatch(notificationActions.clearNotification())
      },3000)
   return ()=> clearTimeout(timer)
    }

  },[message,dispatch])

  return (
    <div className="container">
     { message&&<div class="alert alert-success" role="alert">
      {message}
      </div>
}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
