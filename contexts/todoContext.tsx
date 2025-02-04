import React, { createContext, useState, ReactNode } from 'react'
import { Todo, TodoContextType } from '../types/todoTypes'

export const TodoContext = createContext<TodoContextType | null>(null)

type TodoProviderProps = {
  children: ReactNode
}

export function TodoProvider ({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const moveTodo = (fromIndex: number, toIndex: number) => {
    const newTodos = [...todos]
    const [movedTodo] = newTodos.splice(fromIndex, 1)
    newTodos.splice(toIndex, 0, movedTodo)
    setTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, moveTodo }}>
      {children}
    </TodoContext.Provider>
  )
}