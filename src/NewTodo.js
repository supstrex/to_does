import { useEffect, useState } from "react";

function Newtodo({ todos, submit }) {
  const editable = todos.find((todo) => {
    return todo.editing === true;
  });

  const [text, setText] = useState("");
  useEffect(() => {
    if (editable) {
      setText(editable.text);
    }
  }, [editable]);

  document.addEventListener('keydown', (e)=>{
    if(e.key === ' '){
      onSubmit(e)
    }
  });

  function onSubmit(e){
    e.preventDefault();
    submit(text, editable?.id);
    setText("");    
  }
  return (
    <form
      className="NewTodo"
      onSubmit={onSubmit}
    >
      <p>Please enter new task</p>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
}

export default Newtodo;
