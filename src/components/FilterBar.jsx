const filters = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Completed', value: 'completed' },
]

function FilterBar({ currentFilter, onChangeFilter }) {
  return (
    <section className="section-card">
      <div className="filter-row">
        <h2>Filter tasks</h2>

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
