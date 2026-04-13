import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <section className="section-card">
      <div className="list-header">
        <h2>Tasks</h2>
        <p>{tasks.length} task(s)</p>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>No tasks found for this filter.</p>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default TaskList
