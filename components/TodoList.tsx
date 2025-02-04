import React, { useContext } from 'react'
import { FlatList, View } from 'react-native'
import { TodoContext } from '../contexts/todoContext'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useContext(TodoContext)!

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => <TodoItem todo={item} index={index} />}
    />
  )
}