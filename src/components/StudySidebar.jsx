import { useMemo } from 'react'

const studyTips = [
  '🎯 Break your tasks into smaller chunks',
  '⏰ Use the Pomodoro technique: 25 min focus, 5 min break',
  '📝 Summarize what you learn in your own words',
  '🧠 Review material after 24 hours for better retention',
  '💧 Stay hydrated while studying',
  '🚶 Take short walks to refresh your mind',
  '🌙 Get enough sleep for better focus',
  '📱 Turn off notifications while studying',
]

const encouragingWords = [
  'Great progress! Keep it up! 🚀',
  'Every task completed is a step towards success! 💪',
  "You're doing amazing! 🌟",
  'Consistency is key - keep grinding! 📚',
  "Don't give up, you've got this! 💯",
  'One task at a time, you can do it! 🎯',
  'Your future self will thank you! 🙏',
  'Learning is a journey, enjoy the process! 🎓',
]

function StudySidebar({ tasks }) {
  // Calculate study breakdown by subject
  const studyBreakdown = useMemo(() => {
    const breakdown = {}
    tasks.forEach((task) => {
      const subject = task.subject || 'Unassigned'
      breakdown[subject] = (breakdown[subject] || 0) + 1
    })
    return Object.entries(breakdown).sort((a, b) => b[1] - a[1])
  }, [tasks])

  // Calculate completion rate
  const completionRate = useMemo(() => {
    if (tasks.length === 0) return 0
    const completed = tasks.filter((task) => task.completed).length
    return Math.round((completed / tasks.length) * 100)
  }, [tasks])

  // Calculate overdue count
  const overdueCount = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return tasks.filter((task) => {
      if (task.completed || !task.dueDate) return false
      const taskDate = new Date(task.dueDate)
      taskDate.setHours(0, 0, 0, 0)
      return taskDate < today
    }).length
  }, [tasks])

  // Calculate tasks completed this week
  const tasksCompletedThisWeek = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const weekAgo = new Date(today)
    weekAgo.setDate(weekAgo.getDate() - 7)

    return tasks.filter((task) => {
      if (!task.completed) return false
      const taskDate = new Date(task.createdAt)
      taskDate.setHours(0, 0, 0, 0)
      return taskDate >= weekAgo && taskDate <= today
    }).length
  }, [tasks])

  // Find busiest subject
  const busiestSubject = useMemo(() => {
    if (studyBreakdown.length === 0) return null
    return studyBreakdown[0]
  }, [studyBreakdown])

  // Calculate completion rate by subject
  const completionRateBySubject = useMemo(() => {
    const rateBySubject = {}
    studyBreakdown.forEach(([subject, total]) => {
      const completed = tasks.filter(
        (task) => (task.subject || 'Unassigned') === subject && task.completed,
      ).length
      rateBySubject[subject] = total > 0 ? Math.round((completed / total) * 100) : 0
    })
    return rateBySubject
  }, [studyBreakdown, tasks])

  // Get a random tip and encouraging word
  const randomTip = useMemo(
    () => studyTips[Math.floor(Math.random() * studyTips.length)],
    [],
  )

  const randomEncouragingWord = useMemo(
    () =>
      encouragingWords[Math.floor(Math.random() * encouragingWords.length)],
    [],
  )

  // Calculate total study time estimate (assuming 30 min per task)
  const estimatedHours = useMemo(() => {
    return tasks.length * 0.5
  }, [tasks])

  return (
    <aside className="study-sidebar">
      {/* Study Insights Header */}
      <div className="sidebar-section">
        <h3 className="sidebar-title">📊 Study Insights</h3>
      </div>

      {/* Encouraging Message */}
      <div className="sidebar-section encourage-box">
        <p className="encourage-text">{randomEncouragingWord}</p>
      </div>

      {/* Progress Statistics */}
      <div className="sidebar-section">
        <h4 className="sidebar-subtitle">Progress Statistics</h4>
        <div className="progress-stat">
          <span className="progress-label">Completion Rate</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
          <span className="progress-percentage">{completionRate}%</span>
        </div>

        <div className="stats-mini-grid">
          <div className="stat-mini">
            <span className="mini-label">Est. Study Time</span>
            <strong className="mini-value">
              {estimatedHours.toFixed(1)}h
            </strong>
          </div>
          <div className="stat-mini">
            <span className="mini-label">Active Tasks</span>
            <strong className="mini-value">
              {tasks.filter((t) => !t.completed).length}
            </strong>
          </div>
        </div>
      </div>

      {/* More Insights */}
      <div className="sidebar-section">
        <h4 className="sidebar-subtitle">🎯 Insights</h4>
        <div className="insights-grid">
          <div className="insight-item">
            <span className="insight-label">Overdue Tasks</span>
            <strong className={`insight-value ${overdueCount > 0 ? 'urgent' : ''}`}>
              {overdueCount}
            </strong>
          </div>
          <div className="insight-item">
            <span className="insight-label">Completed This Week</span>
            <strong className="insight-value">{tasksCompletedThisWeek}</strong>
          </div>
        </div>
        {busiestSubject && (
          <div className="insight-item full-width">
            <span className="insight-label">📚 Busiest Subject</span>
            <strong className="insight-value">{busiestSubject[0]} ({busiestSubject[1]} tasks)</strong>
          </div>
        )}
      </div>

      {/* Study Breakdown by Subject */}
      <div className="sidebar-section">
        <h4 className="sidebar-subtitle">📚 Study Breakdown</h4>
        <div className="subject-list">
          {studyBreakdown.length > 0 ? (
            studyBreakdown.map(([subject, count]) => (
              <div key={subject} className="subject-item">
                <div className="subject-info">
                  <span className="subject-name">{subject}</span>
                  <span className="subject-completion">
                    {completionRateBySubject[subject]}%
                  </span>
                </div>
                <span className="subject-count">{count}</span>
              </div>
            ))
          ) : (
            <p className="empty-state">No tasks yet. Start adding some!</p>
          )}
        </div>
      </div>

      {/* Study Tips */}
      <div className="sidebar-section tip-box">
        <h4 className="sidebar-subtitle">💡 Quick Tip</h4>
        <p className="tip-text">{randomTip}</p>
      </div>
    </aside>
  )
}

export default StudySidebar
