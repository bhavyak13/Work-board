import React from 'react'
import { TodosProvider } from './Contexts/TodosContext';
import Navbar from './Navbar';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

function TodoApp() {
    return (
        <div>
            <Navbar />
            <TodosProvider>
                <NewTodoForm />
                <TodoList />
            </TodosProvider>
        </div>
    )
}

export default TodoApp;