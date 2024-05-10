const Counters = ({ tareas }) => {
  // estado count
  const uncheckedCount = tareas.reduce((acc, tarea) => {
    return tarea.completed ? acc : acc + 1
  },0)

  return (
    <div className="flow-right controls">
      <span>Item count: <span id="item-count">{tareas.length}</span></span>
      <span>Unchecked count: <span id="unchecked-count">{uncheckedCount}</span></span>
    </div>
  )
}

export default Counters