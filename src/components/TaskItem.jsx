function formatDate(dateString) {
  if (!dateString) return 'No due date'

  const date = new Date(dateString)
  return date.toLocaleDateString()
}

function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <article className={task.completed ? 'task-item completed' : 'task-item'}>
      <div className="task-main">
        <div className="task-top-row">
          <h3>{task.title}</h3>
          <span className="subject-badge">{task.subject}</span>
        </div>

        <p className="task-meta">Due: {formatDate(task.dueDate)}</p>
        <p className="task-status">
          Status: {task.completed ? 'Completed' : 'Pending'}
        </p>
      </div>

      <div className="task-actions">
        <button
          type="button"
          className="secondary-btn"
          onClick={() => onToggleTask(task.id)}
        >
          {task.completed ? 'Mark pending' : 'Mark complete'}
        </button>

        <button
          type="button"
          className="danger-btn"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default TaskItem
