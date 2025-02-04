import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TodoContext, TodoProvider } from '../../contexts/todoContext'
import TodoList from '../../components/TodoList'
import AddTodo from '../../components/AddTodo'

export default function HomeScreen() {
  const { todos } = useContext(TodoContext)!

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Todo App Test ({todos?.length})</Text>
        <AddTodo />
        <TodoList />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#FFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
})
