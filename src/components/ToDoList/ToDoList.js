import "./ToDoList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getInitialState,todoSelector } from "../../redux/reducers/todoReducer";
import axios from "axios";
import { actions } from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
//import { toggleTodo } from "../../redux/actions/todoActions";
function ToDoList({ onToggle}) {
  const todos=useSelector(todoSelector )
  const dispatch=useDispatch();

  

  // useEffect(()=>{
  //   fetch("http://localhost:4100/api/todos").then(res=>{ console.log(res.status)
  //     res.json()} ).then(parsedJson=>{
  //     console.log(parsedJson)
  //   })
  // },[])

  // useEffect(() => {
  //   fetch("http://localhost:4100/api/todos")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! status: ${res.status}`);
  //       }
  //       return res.json();
  //     })
  //     .then((parsedJson) => {
  //       console.log(parsedJson);
  //     })
  //     .catch((error) => {
  //       console.error('Fetch error:', error);
  //     });
  // }, []);
useEffect(()=>{
  dispatch(getInitialState());
  
  // axios.get("http://localhost:4100/api/todos")
  // .then((res)=>{
  //   console.log(res.data)
  //   dispatch(actions.setInitialState(res.data))

  // })

},[])

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
