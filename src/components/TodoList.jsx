import useTodo from '../context/useTodo'
import TodoItem from './TodoItem'

function TodoList({ filter }) {
  const { todos } = useTodo()

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return todo.completed !== true
    }

    if (filter === 'completed') {
      return todo.completed === true
    }

    return true
  })

  if (filteredTodos.length === 0) {
    return (
      <p className="rounded-md border border-dashed border-slate-300 bg-white p-5 text-center text-slate-500">
        Hozircha vazifa yo'q
      </p>
    )
  }

  return (
    <ul className="flex flex-col gap-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
