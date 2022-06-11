import React, { useContext } from 'react'
import { TodosContext } from './Contexts/TodosContext';
import Todo from './Todo';


const TodoList = () => {
    const todos = useContext(TodosContext);
    return (
        <div>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
}
export default TodoList;