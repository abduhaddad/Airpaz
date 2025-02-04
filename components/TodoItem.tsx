import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TodoContext } from '../contexts/todoContext'
import { Todo } from '../types/todoTypes'

type TodoItemProps = {
  todo: Todo
  index: number
}

function TodoItem({ todo, index } : TodoItemProps) {
  const { toggleTodo, deleteTodo, moveTodo } = useContext(TodoContext)!

  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
        <Text style={todo.completed ? styles.completedText : styles.text}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => moveTodo(index, index - 1)}>
        <Text style={styles.moveText}>Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => moveTodo(index, index + 1)}>
        <Text style={styles.moveText}>Down</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginTop : 12,
    borderRadius : 16,
    backgroundColor : '#F5F5F5'
  },
  text: {
    fontSize: 16,
  },
  completedText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteText: {
    color: 'red',
  },
  moveText: {
    color: '#3a3a3a',
    fontWeight :'bold'
  },
})

export default TodoItem