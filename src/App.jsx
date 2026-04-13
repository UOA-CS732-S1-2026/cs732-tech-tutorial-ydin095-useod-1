import { useEffect, useMemo, useState } from 'react'
import TaskForm from './components/TaskForm'
import FilterBar from './components/FilterBar'
import TaskList from './components/TaskList'
import StudyInsights from './components/StudyInsights'

const STORAGE_KEY = 'ai-study-planner-tasks'
const SUBJECTS_STORAGE_KEY = 'ai-study-planner-subjects'

const starterSubjects = ['Web Dev', 'Maths', 'CS', 'Essay', 'Revision']

const starterTasks = [
  {
    id: crypto.randomUUID(),
    title: 'Read React notes',
    subject: 'Web Dev',
    dueDate: '',
    completed: false,
    createdAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Finish maths exercises',
    subject: 'Maths',
    dueDate: '',
    completed: true,
    createdAt: Date.now(),
  },
]

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (error) {
        console.error('Failed to parse saved tasks:', error)
      }
    }
    return starterTasks
  })

  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem(SUBJECTS_STORAGE_KEY)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (error) {
        console.error('Failed to parse saved subjects:', error)
      }
    }
    return starterSubjects
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem(SUBJECTS_STORAGE_KEY, JSON.stringify(subjects))
  }, [subjects])

  function addTask(taskData) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskData.title.trim(),
      subject: taskData.subject,
      dueDate: taskData.dueDate,
      completed: false,
      createdAt: Date.now(),
    }

    setTasks((currentTasks) => [newTask, ...currentTasks])
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId))
  }

  function addSubject(newSubject) {
    if (newSubject && !subjects.includes(newSubject)) {
      setSubjects((currentSubjects) => [...currentSubjects, newSubject])
    }
  }

  const filteredTasks = useMemo(() => {
    if (filter === 'pending') {
      return tasks.filter((task) => !task.completed)
    }

    if (filter === 'completed') {
      return tasks.filter((task) => task.completed)
    }

    return tasks
  }, [tasks, filter])

  const taskStats = useMemo(() => {
    const total = tasks.length
    const completed = tasks.filter((task) => task.completed).length
    const pending = total - completed

    return { total, completed, pending }
  }, [tasks])

  return (
    <div className="page-shell">
      <div className="app-container">
        <div className="app-card">
          <header className="hero">
            <p className="eyebrow">AI-Assisted React Demo</p>
            <h1>Study Planner</h1>
            <p className="hero-text">
              Organise your study tasks, track progress, and keep everything saved in
              your browser.
            </p>
          </header>

          <section className="stats-grid">
            <div className="stat-box">
              <span className="stat-label">Total</span>
              <strong>{taskStats.total}</strong>
            </div>
            <div className="stat-box">
              <span className="stat-label">Pending</span>
              <strong>{taskStats.pending}</strong>
            </div>
            <div className="stat-box">
              <span className="stat-label">Completed</span>
              <strong>{taskStats.completed}</strong>
            </div>
          </section>

          <TaskForm onAddTask={addTask} subjects={subjects} onAddSubject={addSubject} />

          <FilterBar currentFilter={filter} onChangeFilter={setFilter} />

          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </div>

        <StudyInsights tasks={tasks} subjects={subjects} />
      </div>
    </div>
  )
}

export default App
