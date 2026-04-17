# 📚 AI-Assisted React Study Planner

> **Organize your study chaos, one task at a time.** A beautifully crafted React study planner that helps you stay focused, productive, and on top of your academic goals—all while demonstrating modern web development practices.

<div align="center">

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-powered-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## ✨ Why This Project?

Stop juggling multiple subjects, deadlines, and priorities. The **Study Planner** brings clarity to your academic workflow with an intuitive interface, intelligent task management, and real-time insights. Built as a showcase of modern React patterns and AI-assisted development.

---

## 🎯 Key Features

### **Task Management**
- ✅ Create, edit, and organize study tasks effortlessly
- 🏷️ Assign custom subjects (or choose from preset options)
- 📅 Set intelligent due dates with deadline alerts
- 🎚️ Prioritize tasks (High, Medium, Low)

### **Smart Filtering & Insights**
- 🔍 Filter by status (All, Pending, Completed)
- 🏫 Sort by subject area
- 🚨 Filter by priority level
- 📊 Real-time completion statistics
- 💡 Study tips & progress insights
- 📈 Subject breakdown analytics
- ⏱️ Estimated study time tracking

### **Intelligence & Feedback**
- ⚠️ Overdue task highlighting
- 🔔 Due soon notifications
- ✨ Success feedback with toast notifications
- 🎨 Task status visual indicators

### **Always-On Availability**
- 💾 Automatic localStorage persistence
- 🚀 Instant task loading on app start
- 📱 Fully responsive design (mobile, tablet, desktop)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18+** | Modern UI framework with hooks |
| **Vite** | Lightning-fast build & dev experience |
| **CSS3** | Beautiful gradients, animations & layouts |
| **localStorage** | Client-side data persistence |
| **ES6+** | Modern JavaScript features |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager

### Installation & Setup

```bash
# 1️⃣ Clone or download the project
cd ai-study-planner

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start the development server
npm run dev

# 4️⃣ Open in your browser
# The terminal will show: ➜ Local: http://localhost:5173
# Copy and paste that URL into your browser!
```

That's it! Your study planner is ready to use. 🎉

---

## 📂 Project Structure

```
ai-study-planner/
├── src/
│   ├── components/
│   │   ├── FilterBar.jsx         # Subject & priority filtering
│   │   ├── TaskForm.jsx          # Create new tasks with priority
│   │   ├── TaskItem.jsx          # Individual task rendering
│   │   ├── TaskList.jsx          # Task list container
│   │   ├── StudySidebar.jsx      # Analytics & insights dashboard
│   │   ├── WeeklyPlanning.jsx    # Weekly view (future)
│   │   └── Toast.jsx             # Success notifications
│   ├── App.jsx                   # Main app component & logic
│   ├── App.css                   # Polished styling
│   └── main.jsx                  # React entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 💡 How to Use

### Adding a Task
1. **Title**: "Review lecture slides" or any study goal
2. **Subject**: Pick from Web Dev, Maths, Physics... or add your own!
3. **Due Date**: Select when you need to complete it
4. **Priority**: Choose High, Medium, or Low
5. Hit **"Add task"** and watch it appear in your list!

### Filtering & Organization
- Use the **status filters** to focus on pending or completed tasks
- **Sort by subject** to see all tasks in one area
- **Filter by priority** to tackle urgent items first
- Watch the **sidebar** update with live statistics

### Tracking Progress
- Check your **completion rate** on the sidebar
- See **study time estimates** for planning
- View **subject breakdowns** to identify weak areas
- Get daily **productivity tips** for better studying

---

## 🧠 Perfect For Learning

This project is an **excellent learning resource** and demonstrates:

### React Concepts
- ✅ Functional components with hooks (`useState`, `useEffect`)
- ✅ Component composition & reusability
- ✅ Props drilling & state management
- ✅ Array methods & filtering logic
- ✅ Event handling & form management
- ✅ Conditional rendering & key management

### Web Development Best Practices
- ✅ Responsive design (mobile-first approach)
- ✅ CSS Grid & Flexbox layouts
- ✅ Modern CSS (gradients, shadows, animations)
- ✅ Semantic HTML structure
- ✅ Performance optimization with `useMemo`

### AI-Assisted Development
- 💻 **Planning**: Use AI to architecture components
- 💻 **Generation**: Let AI create starter code
- 💻 **Debugging**: Get help fixing state issues
- 💻 **Documentation**: AI-powered README creation
- 💻 **Refactoring**: Improve code quality with suggestions

---

## 🎨 Design Philosophy

**Clean. Minimal. Powerful.**

The interface uses:
- **Gradient backgrounds** for visual depth
- **Subtle shadows** for hierarchy
- **Color psychology** (red for urgent, green for complete)
- **Smooth animations** for delightful interactions
- **Consistent spacing** throughout

Every pixel is intentional. Every interaction feels responsive.

---

## 📝 Feature Roadmap

- [ ] 📅 Weekly planning view with calendar
- [ ] 🔄 Recurring tasks support
- [ ] 🏆 Achievement badges & streaks
- [ ] 📊 Advanced analytics dashboard
- [ ] 🌙 Dark mode toggle
- [ ] 🔔 Browser push notifications
- [ ] 📤 Export tasks as PDF
- [ ] 👥 Collaborative features
- [ ] ☁️ Cloud sync option

---

## 🤝 Contributing

Found a bug? Have an idea? Want to improve the UI?

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📚 Learning Resources

- **React Docs**: https://react.dev
- **Vite Guide**: https://vitejs.dev/guide/
- **CSS Grid**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **localStorage**: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

---

## 💬 Feedback & Support

Have questions? Found an issue? Suggestions for improvements?

- 📧 Create an issue on GitHub
- 💭 Start a discussion
- 🐛 Report bugs with details

---

## 📄 License

This project is open-source and available under the **MIT License**. Feel free to use it for learning, teaching, or inspiration!

---

<div align="center">

**Made with 💜 by the CS732 Lab Community**

⭐ If this helped you, please star this repository!

</div>
