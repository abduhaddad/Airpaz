import React, { useState, useContext } from 'react'
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { TodoContext } from '../contexts/todoContext'

export default function AddTodo() {
    const [text, setText] = useState('')
    const { addTodo } = useContext(TodoContext)!

    const handleAddTodo = () => {
        addTodo(text)
        setText('')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tambh todo"
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity style={styles.btn} onPress={handleAddTodo}>
                <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#26ae30',
        paddingHorizontal: 12,
        paddingVertical : 8,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#FFF'
    },
    container: {
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        borderColor: '#E5E5E5',
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginRight: 16,
        padding: 5,
    },
})
