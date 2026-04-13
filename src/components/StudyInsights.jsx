function StudyInsights({ tasks, subjects }) {
  const completedToday = tasks.filter((task) => {
    const today = new Date().toDateString()
    const taskDate = new Date(task.createdAt).toDateString()
    return task.completed && taskDate === today
  }).length

  const completionRate =
    tasks.length > 0 ? Math.round((tasks.filter((t) => t.completed).length / tasks.length) * 100) : 0

  const subjectStats = subjects.map((subject) => ({
    name: subject,
    total: tasks.filter((t) => t.subject === subject).length,
    completed: tasks.filter((t) => t.subject === subject && t.completed).length,
  }))

  const motivationalQuotes = [
    '🎯 Every completed task brings you closer to your goals!',
    '🚀 Consistency is the key to success!',
    '💪 You are capable of amazing things!',
    '⭐ Progress, not perfection!',
    '🧠 Learning is a journey, not a destination!',
    '✨ Your effort today shapes your tomorrow!',
    '🎓 Knowledge is power!',
    '📚 Keep pushing, you got this!',
  ]

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]

  const studyTips = [
    '📍 Break tasks into smaller chunks',
    '⏱️ Use the Pomodoro technique (25 min focus)',
    '🧘 Take regular breaks for better focus',
    '📝 Review notes frequently',
    '🎯 Set specific, measurable goals',
    '😴 Get enough sleep for retention',
  ]

  return (
    <div className="insights-sidebar">
      <div className="insights-card motivation-card">
        <div className="quote-text">{randomQuote}</div>
      </div>

      <div className="insights-card stats-card">
        <h3>📊 Today's Progress</h3>
        <div className="stat-metric">
          <span className="metric-label">Tasks Done Today</span>
          <span className="metric-value">{completedToday}</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-label">
            Overall Completion: <strong>{completionRate}%</strong>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${completionRate}%` }}></div>
          </div>
        </div>
      </div>

      <div className="insights-card subjects-card">
        <h3>📚 Subject Breakdown</h3>
        <div className="subject-list">
          {subjectStats.map((stat) => (
            <div key={stat.name} className="subject-item">
              <div className="subject-name">{stat.name}</div>
              <div className="subject-progress">
                <span className="subject-count">
                  {stat.completed}/{stat.total}
                </span>
                <div className="mini-progress-bar">
                  <div
                    className="mini-progress-fill"
                    style={{
                      width: stat.total > 0 ? `${(stat.completed / stat.total) * 100}%` : '0%',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="insights-card tips-card">
        <h3>💡 Study Tips</h3>
        <div className="tips-list">
          {studyTips.slice(0, 3).map((tip, index) => (
            <div key={index} className="tip-item">
              {tip}
            </div>
          ))}
        </div>
      </div>

      <div className="insights-card streak-card">
        <h3>🔥 Study Streak</h3>
        <div className="streak-number">{tasks.filter((t) => t.completed).length}</div>
        <div className="streak-label">Tasks completed</div>
      </div>
    </div>
  )
}

export default StudyInsights
