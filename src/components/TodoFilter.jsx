const buttons = [
  { value: 'all', text: 'Barchasi' },
  { value: 'completed', text: 'Bajarilganlar' },
  { value: 'active', text: 'Bajarilmaganlar' },
]

function TodoFilter({ filter, setFilter }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {buttons.map((button) => (
        <button
          key={button.value}
          className={`rounded-md border px-4 py-2 text-sm font-medium transition hover:border-blue-400 hover:bg-blue-50 ${
            filter === button.value
              ? 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600'
              : 'border-slate-300 bg-white text-slate-700'
          }`}
          type="button"
          onClick={() => setFilter(button.value)}
        >
          {button.text}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
