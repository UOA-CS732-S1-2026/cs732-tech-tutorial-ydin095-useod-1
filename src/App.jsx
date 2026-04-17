import { useEffect, useMemo, useState } from 'react'
import TaskForm from './components/TaskForm'
import FilterBar from './components/FilterBar'
import TaskList from './components/TaskList'
import StudySidebar from './components/StudySidebar'
import Toast from './components/Toast'
import WeeklyPlanning from './components/WeeklyPlanning'

const STORAGE_KEY = 'ai-study-planner-tasks'
const SUBJECTS_STORAGE_KEY = 'ai-study-planner-subjects'

const starterTasks = [
  {
    id: crypto.randomUUID(),
    title: 'Read React notes',
    subject: 'Web Dev',
    dueDate: '',
    priority: 'medium',
    completed: false,
    createdAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Finish maths exercises',
    subject: 'Maths',
    dueDate: '',
    priority: 'high',
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

  const [filter, setFilter] = useState('all')
  const [subjectFilter, setSubjectFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')
  const [toast, setToast] = useState(null)
  const [editingTask, setEditingTask] = useState(null)
  const [subjects, setSubjects] = useState(() => {
    const saved = localStorage.getItem(SUBJECTS_STORAGE_KEY)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (error) {
        console.error('Failed to parse saved subjects:', error)
      }
    }
    return ['Web Dev', 'Maths']
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem(SUBJECTS_STORAGE_KEY, JSON.stringify(subjects))
  }, [subjects])

  function addSubject(newSubject) {
    if (!subjects.includes(newSubject)) {
      setSubjects([...subjects, newSubject])
    }
  }

  function addTask(taskData) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskData.title.trim(),
      subject: taskData.subject,
      dueDate: taskData.dueDate,
      priority: taskData.priority || 'medium',
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
    setToast({ message: 'Task deleted successfully!', type: 'success' })
  }

  function editTask(taskId, updatedData) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, ...updatedData }
          : task,
      ),
    )
    setEditingTask(null)
    setToast({ message: 'Task updated successfully!', type: 'success' })
  }

  const filteredTasks = useMemo(() => {
    let result = tasks

    // Filter by status (all/pending/completed)
    if (filter === 'pending') {
      result = result.filter((task) => !task.completed)
    } else if (filter === 'completed') {
      result = result.filter((task) => task.completed)
    }

    // Filter by subject
    if (subjectFilter !== 'all') {
      result = result.filter((task) => task.subject === subjectFilter)
    }

    // Filter by priority
    if (priorityFilter !== 'all') {
      result = result.filter((task) => task.priority === priorityFilter)
    }

    return result
  }, [tasks, filter, subjectFilter, priorityFilter])

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

          <TaskForm 
            onAddTask={addTask} 
            subjects={subjects} 
            onAddSubject={addSubject}
            editingTask={editingTask}
            onEditTask={editTask}
            onCancelEdit={() => setEditingTask(null)}
          />

          <FilterBar 
            currentFilter={filter} 
            onChangeFilter={setFilter}
            currentSubjectFilter={subjectFilter}
            onChangeSubjectFilter={setSubjectFilter}
            currentPriorityFilter={priorityFilter}
            onChangePriorityFilter={setPriorityFilter}
            tasks={tasks}
          />

          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
            onEditTask={setEditingTask}
            editingTask={editingTask}
          />

          <WeeklyPlanning tasks={tasks} />
        </div>

        <StudySidebar tasks={tasks} />
      </div>

      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

export default App
