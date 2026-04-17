const filters = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Completed', value: 'completed' },
]

function FilterBar({ 
  currentFilter, 
  onChangeFilter,
  currentSubjectFilter,
  onChangeSubjectFilter,
  currentPriorityFilter,
  onChangePriorityFilter,
  tasks
}) {
  // Extract unique subjects from tasks
  const subjects = ['All Subjects', ...new Set(tasks.map(t => t.subject).filter(Boolean))]
  const priorities = ['All Priorities', 'low', 'medium', 'high']

  return (
    <section className="section-card">
      <div className="filter-row">
        <h2>Filter tasks</h2>

        <div className="filter-dropdowns">
          <label>
            Subject:
            <select 
              value={currentSubjectFilter} 
              onChange={(e) => onChangeSubjectFilter(e.target.value)}
            >
              {subjects.map(subject => (
                <option key={subject} value={subject === 'All Subjects' ? 'all' : subject}>
                  {subject}
                </option>
              ))}
            </select>
          </label>

          <label>
            Priority:
            <select 
              value={currentPriorityFilter} 
              onChange={(e) => onChangePriorityFilter(e.target.value)}
            >
              {priorities.map(priority => (
                <option key={priority} value={priority === 'All Priorities' ? 'all' : priority}>
                  {priority === 'All Priorities' ? 'All Priorities' : priority.charAt(0).toUpperCase() + priority.slice(1)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={currentFilter === filter.value ? 'filter-btn active' : 'filter-btn'}
              onClick={() => onChangeFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FilterBar
