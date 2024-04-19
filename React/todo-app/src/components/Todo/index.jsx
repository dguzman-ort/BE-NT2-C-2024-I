import Button from "../Button";

const Todo = ({ tarea, onClickRemove, onToggle }) => {
  
  return (
    <li className="todo-container">
      <input type="checkbox" className="todo-checkbox" checked={tarea.completed} onChange={() => onToggle(tarea.id)} />
      <span className="todo-item">{tarea.title}</span>
      <Button className="button todo-delete" text="X" callback={() => onClickRemove(tarea.id)} />
    </li>
  );
}

export default Todo;