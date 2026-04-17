# 📚 AI-Assisted React Study Planner

> A beautifully crafted React study planner that helps you organize tasks, track progress, and stay productive.

<div align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-powered-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## 🎯 Key Features

- ✅ **Create, edit, delete** study tasks effortlessly
- 🏷️ **Custom subjects** - add your own or use presets
- 📅 **Due dates** with intelligent deadline alerts
- 🎚️ **Priorities** - High, Medium, Low
- 🔍 **Smart filtering** by status, subject, and priority
- 📊 **Real-time stats** - completion rate, study time, subject breakdown
- ⚠️ **Visual alerts** - overdue highlighting, due soon notifications
- 📅 **Weekly view** - see this week's tasks grouped by date
- 💾 **Auto-save** - localStorage keeps all data between sessions
- 📱 **Responsive design** - works on mobile, tablet, desktop

---

## 🛠️ Tech Stack

- **React 18+** - Modern UI with hooks
- **Vite** - Fast build & dev server
- **CSS3** - Gradients, animations, responsive layouts
- **localStorage** - Client-side data persistence

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

That's it! 🎉

---

## 💡 How to Use

### Add a Task
1. Enter task **title** (e.g., "Review React notes")
2. Select **subject** (Web Dev, Maths, etc.) or add a new one
3. Set **due date**
4. Choose **priority** (Low, Medium, High)
5. Click **"Add task"**

### Edit a Task
1. Click the **"Edit"** button on any task
2. Update the details
3. Click **"Update task"** to save

### Manage Tasks
- **Mark complete/pending** - Toggle completion status
- **Delete** - Remove tasks you no longer need
- **Filter** - By status, subject, or priority
- **View weekly** - See all tasks due this week

### Track Progress
- **Completion rate** on sidebar
- **Study time estimate** for planning
- **Subject breakdown** to spot weak areas
- **Study tips** for better productivity

---

## 📂 Project Structure

```
src/
├── components/
│   ├── TaskForm.jsx          # Add & edit tasks
│   ├── TaskItem.jsx          # Single task display
│   ├── TaskList.jsx          # All tasks
│   ├── FilterBar.jsx         # Filtering options
│   ├── StudySidebar.jsx      # Analytics & insights
│   ├── WeeklyPlanning.jsx    # Weekly task view
│   ├── Toast.jsx             # Notifications
│   └── FilterBar.jsx         # Status filters
├── App.jsx                   # Main component
├── App.css                   # Styling
└── main.jsx                  # Entry point
```

---

## 📝 Features Checklist

- [x] Create tasks
- [x] Edit tasks
- [x] Delete tasks
- [x] Filter by status/subject/priority
- [x] Due date alerts
- [x] Weekly planner
- [x] Auto-save to localStorage
- [x] Custom subjects
- [x] Progress tracking
- [ ] Dark mode
- [ ] Cloud sync
- [ ] Export to PDF

---

## 📄 License

MIT License - Feel free to use for learning and projects!
