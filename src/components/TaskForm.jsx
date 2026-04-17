import { useState, useEffect } from 'react'

function TaskForm({ onAddTask, subjects, onAddSubject, editingTask, onEditTask, onCancelEdit }) {
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState(subjects.length > 0 ? subjects[0] : '')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('medium')
  const [newSubject, setNewSubject] = useState('')

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title)
      setSubject(editingTask.subject)
      setDueDate(editingTask.dueDate)
      setPriority(editingTask.priority)
    } else {
      resetForm()
    }
  }, [editingTask])

  function resetForm() {
    setTitle('')
    setSubject(subjects.length > 0 ? subjects[0] : '')
    setDueDate('')
    setPriority('medium')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    const taskData = {
      title,
      subject,
      dueDate,
      priority,
    }

    if (editingTask) {
      onEditTask(editingTask.id, taskData)
    } else {
      onAddTask(taskData)
    }

    resetForm()
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
      <h2>{editingTask ? 'Edit task' : 'Add study task'}</h2>

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
          Priority
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <button
              type="button"
              className={priority === 'low' ? 'priority-btn active' : 'priority-btn'}
              onClick={() => setPriority('low')}
            >
              Low
            </button>
            <button
              type="button"
              className={priority === 'medium' ? 'priority-btn active' : 'priority-btn'}
              onClick={() => setPriority('medium')}
            >
              Medium
            </button>
            <button
              type="button"
              className={priority === 'high' ? 'priority-btn active' : 'priority-btn'}
              onClick={() => setPriority('high')}
            >
              High
            </button>
          </div>
        </label>

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
          {editingTask ? 'Update task' : 'Add task'}
        </button>
        
        {editingTask && (
          <button 
            className="secondary-btn" 
            type="button"
            onClick={() => {
              resetForm()
              onCancelEdit()
            }}
          >
            Cancel
          </button>
        )}
      </form>
    </section>
  )
}

export default TaskForm
