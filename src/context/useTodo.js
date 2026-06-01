import { useContext } from 'react'
import TodoContext from './todoContext'

function useTodo() {
  return useContext(TodoContext)
}

export default useTodo
