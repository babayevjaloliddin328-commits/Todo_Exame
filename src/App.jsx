import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import TodoProvider from './context/TodoProvider'

function App() {
  const [filter, setFilter] = useState('all')

  return (
    <TodoProvider>
      <main className="min-h-screen bg-slate-100 px-4 py-8">
        <div className="mx-auto max-w-xl">
          <div className="rounded-md bg-white p-5 shadow-md sm:p-6">
            <h1 className="mb-2 text-center text-3xl font-bold text-slate-900">
              Todo List
            </h1>
            <p className="mb-6 text-center text-sm text-slate-500">
              Vazifani boshlang 
            </p>

            <div className="flex flex-col gap-5">
              <TodoForm />
              <TodoList filter={filter} />
              <TodoFilter filter={filter} setFilter={setFilter} />
            </div>
          </div>
        </div>
      </main>
    </TodoProvider>
  )
}

export default App
