import { useState } from 'react'

function TaskForm({ onAddTask, subjects, onAddSubject }) {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState(subjects.length > 0 ? subjects[0] : '')
  const [dueDate, setDueDate] = useState('')
  const [newSubject, setNewSubject] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    onAddTask({
      title,
      subject,
      dueDate,
    })

    setTitle('')
    setSubject(subjects.length > 0 ? subjects[0] : '')
    setDueDate('')
  }

  function handleAddSubject() {
    if (newSubject.trim()) {
      onAddSubject(newSubject.trim())
      setSubject(newSubject.trim())
      setNewSubject('')
    }
  }

  return (
    <section className="section-card">
      <h2>Add study task</h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <label>
          Task title
          <input
            type="text"
            placeholder="e.g. Review lecture slides"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <div className="form-row">
          <label>
            Subject
            <select
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            >
              {subjects.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Due date
            <input
              type="date"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </label>
        </div>

        <label>
          Add new subject
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <input
              type="text"
              placeholder="e.g. Physics, History"
              value={newSubject}
              onChange={(event) => setNewSubject(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  handleAddSubject()
                }
              }}
              style={{ flex: 1 }}
            />
            <button
              type="button"
              className="secondary-btn"
              onClick={handleAddSubject}
            >
              Add
            </button>
          </div>
        </label>

        <button className="primary-btn" type="submit">
          Add task
        </button>
      </form>
    </section>
  )
}

export default TaskForm
