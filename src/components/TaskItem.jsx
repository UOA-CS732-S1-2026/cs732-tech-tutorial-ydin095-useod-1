function formatDate(dateString) {
  if (!dateString) return 'No due date'

  const date = new Date(dateString)
  return date.toLocaleDateString()
}

function getDueStatus(dueDate, completed) {
  if (!dueDate || completed) return null

  // Parse the date string
  const [year, month, day] = dueDate.split('-').map(Number)
  
  if (!year || !month || !day) return null
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const taskDate = new Date(year, month - 1, day, 0, 0, 0)
  
  const daysUntilDue = Math.floor((taskDate - today) / (1000 * 60 * 60 * 24))
  
  if (daysUntilDue < 0) {
    return { status: 'overdue', message: '⚠️ Overdue!', type: 'overdue' }
  } else if (daysUntilDue === 0) {
    return { status: 'today', message: '⚠️ Due today!', type: 'today' }
  } else if (daysUntilDue > 0 && daysUntilDue <= 3) {
    return { status: 'due-soon', message: `⚠️ Due in ${daysUntilDue} day(s)`, type: 'due-soon' }
  }
  
  return null
}

function TaskItem({ task, onToggleTask, onDeleteTask }) {
  const dueStatus = getDueStatus(task.dueDate, task.completed)
  const priorityClass = `priority-${task.priority}`
  const statusClass = dueStatus ? `status-${dueStatus.type}` : ''
  
  return (
    <article className={`task-item ${priorityClass} ${statusClass} ${task.completed ? 'completed' : ''}`}>
      <div className="task-main">
        <div className="task-top-row">
          <h3>{task.title}</h3>
          <span className="subject-badge">{task.subject}</span>
          <span className={`priority-badge priority-${task.priority}`}>
            {task.priority}
          </span>
        </div>

        <p className="task-meta">Due: {formatDate(task.dueDate)}</p>
        
        {dueStatus && (
          <p className="task-status-alert">{dueStatus.message}</p>
        )}
        
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
