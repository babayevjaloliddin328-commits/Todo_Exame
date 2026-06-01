import { useEffect, useState } from 'react'
import initialData from '../../db.json'
import TodoContext from './todoContext'

const STORAGE_KEY = 'todo-list-items'

const initialTodos = initialData.vazifalar.map((todo) => ({
  id: String(todo.id),
  title: todo.name,
  description: todo.description,
  price: todo.price,
  completed: false,
}))

function normalizeTodo(todo) {
  return {
    id: String(todo.id),
    title: todo.title || todo.name,
    description: todo.description || '',
    price: todo.price ?? '',
    completed: todo.completed === true,
  }
}

function getInitialTodos() {
  const savedTodos = localStorage.getItem(STORAGE_KEY)

  if (!savedTodos) {
    return initialTodos
  }

  try {
    const parsedTodos = JSON.parse(savedTodos).map(normalizeTodo)
    const savedIds = new Set(parsedTodos.map((todo) => todo.id))
    const missingInitialTodos = initialTodos.filter((todo) => !savedIds.has(todo.id))

    return [...missingInitialTodos, ...parsedTodos]
  } catch {
    return initialTodos
  }
}

function TodoProvider({ children }) {
  const [todos, setTodos] = useState(getInitialTodos)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(title, description, price) {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      description,
      price,
      completed: false,
    }

    setTodos((currentTodos) => [newTodo, ...currentTodos])
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))
  }

  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export default TodoProvider

