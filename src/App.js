import { useState } from "react";
import "./style.css";
import Todolist from "./TodoList";
import Newtodo from "./NewTodo";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const todoArray = [
    {
      id: Math.random() + Date.now(),
      text: "Do something",
      completed: false,
      editing: false,
    },
    {
      id: Math.random() + Date.now(),
      text: "Do something",
      completed: false,
      editing: false,
    },
  ];
  const [todos, setTodos] = useState(todoArray);

  return (
    <div className="ToDos">
      <Header />
      <Newtodo
        todos={todos}
        submit={(text, id) => {
          if(id){
            setTodos(todos.map((todo)=>{
              if(todo.id === id){
                return {...todo, editing: false, text}
              }
              return todo;
            }))
          } else {
            setTodos([
              ...todos,
              {
                id: Math.random() + Date.now(),
                text,
                completed: false,
                editing: false,
              },
            ]);
          }  
        }}
      />
      <Todolist
        todos={todos}
        onChange={(newTodo) => {
          setTodos(
            todos.map((todo) => {
              if (todo.id === newTodo.id) {
                return newTodo;
              }
              return todo;
            })
          );
        }}
        onDelete={(todo) => {
          setTodos(
            todos.filter((td) => {
              return td.id !== todo.id;
            })
          );
        }}
        onEdit={(todo) => {
          setTodos(
            todos.map((td) => {
              if (td.id === todo.id) {
                return todo;
              }
              return td;
            })
          );
        }}
      />
      <Footer
        todos={todos}
        onShowUncompleted={() => {
          setTodos(
            todos.filter((todo) => {
              return !todo.completed;
            })
          );
        }}
      />
    </div>
  );
}





export default App;
