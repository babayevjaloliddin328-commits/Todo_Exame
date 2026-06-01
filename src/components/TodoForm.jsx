import { useState } from 'react'
import useTodo from '../context/useTodo'

function TodoForm() {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const { addTodo } = useTodo()

  function handleSubmit(e) {
    e.preventDefault()

    if (title.trim() === '') {
      setError("Vazifa matnini kiriting")
      return
    }

    addTodo(title.trim())
    setTitle('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          className="min-h-12 flex-1 rounded-md border border-slate-300 bg-white px-4 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          type="text"
          placeholder="Yangi vazifa yozing..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            setError('')
          }}
        />
        <button
          className="min-h-12 rounded-md bg-blue-500 px-5 font-medium text-white transition hover:bg-blue-600"
          type="submit"
        >
          Qo'shish
        </button>
      </div>
      {error && <p className="text-sm font-medium text-red-500">{error}</p>}
    </form>
  )
}

export default TodoForm
