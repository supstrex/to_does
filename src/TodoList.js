function Todolist({ todos, onDelete, onChange, onEdit }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <div className="Todo" key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => {
                  onChange({
                    ...todo,
                    completed: e.target.checked,
                  });
                }}
              />
              {todo.text}
              <button
                onClick={() =>
                  onEdit({
                    ...todo,
                    editing: true,
                  })
                }
              >
                Edit
              </button>
              <button
                onClick={() => {
                  onDelete(todo);
                }}
              >
                Delete
              </button>
            </label>
          </div>
        );
      })}
    </div>
  );
}
export default Todolist;