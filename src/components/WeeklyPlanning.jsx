import { useMemo } from 'react'

function WeeklyPlanning({ tasks }) {
  const weeklyTasks = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const weekEnd = new Date(today)
    weekEnd.setDate(weekEnd.getDate() + 7)

    const tasksThisWeek = tasks.filter((task) => {
      if (!task.dueDate) return false
      const taskDate = new Date(task.dueDate)
      taskDate.setHours(0, 0, 0, 0)
      return taskDate >= today && taskDate < weekEnd
    })

    // Group by date
    const grouped = {}
    tasksThisWeek.forEach((task) => {
      const date = task.dueDate
      if (!grouped[date]) {
        grouped[date] = []
      }
      grouped[date].push(task)
    })

    return Object.entries(grouped)
      .sort((a, b) => new Date(a[0]) - new Date(b[0]))
      .map(([date, taskList]) => ({
        date,
        tasks: taskList.sort((a, b) => a.completed - b.completed),
      }))
  }, [tasks])

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}`
  }

  return (
    <section className="section-card">
      <h2>📅 This Week's Tasks</h2>

      {weeklyTasks.length === 0 ? (
        <p className="empty-state">No tasks scheduled for this week</p>
      ) : (
        <div className="weekly-list">
          {weeklyTasks.map(({ date, tasks: dayTasks }) => (
            <div key={date} className="weekly-day-group">
              <h4 className="weekly-date">{formatDate(date)}</h4>
              <div className="weekly-tasks">
                {dayTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`weekly-task-item ${task.completed ? 'completed' : ''}`}
                  >
                    <input type="checkbox" checked={task.completed} readOnly />
                    <div className="weekly-task-info">
                      <span className="weekly-task-title">{task.title}</span>
                      <span className="weekly-task-subject">{task.subject}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default WeeklyPlanning
