import useTodo from '../context/useTodo'

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodo()
  const text = todo.title || todo.name

  
  return (
    <li className="flex items-start gap-3 rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <input
        className="mt-1 h-5 w-5 cursor-pointer accent-blue-500"
        type="checkbox"
        checked={todo.completed === true}
        onChange={() => toggleTodo(todo.id)}
      />
      <div className="flex-1 break-words text-left">
        <h2
          className={`text-base font-semibold ${
            todo.completed === true ? 'text-green-600 line-through' : 'text-slate-900'
          }`}
        >
          {text}
        </h2>
        {todo.description && (
          <p className="mt-1 text-sm leading-6 text-slate-600">{todo.description}</p>
        )}
        {todo.price !== '' && todo.price !== undefined && (
          <p className="mt-2 text-sm font-medium text-blue-600">{todo.price} so'm</p>
        )}
      </div>
      <button
        className="rounded-md px-3 py-1 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-700"
        type="button"
        onClick={() => deleteTodo(todo.id)}
      >
        O'chirish
        
      </button>
    </li>
  )
}

export default TodoItem
