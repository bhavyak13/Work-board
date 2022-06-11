import { v4 as uuid } from 'uuid';
const TodoReducer = (todos, action) => {
    switch (action.type) {
        case 'add':
            return ([...todos, { task: action.task, id: uuid(), completed: false, edit: false }]);
        case 'delete':
            return (todos.filter(todo => todo.id !== action.id));
        case 'toggleCompletion':
            return (todos.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, completed: !(todo.completed) }
                }
                return todo;
            }));
        case 'saveEditedTodo':
            return (todos.map(todo => {
                if (todo.id === action.newTodo.id) {
                    return { ...action.newTodo, edit: false }
                }
                return todo;
            }));
        case 'toggleEditForm':
            return (todos.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, edit: !todo.edit }
                }
                return todo;
            }));
        default:
            break;
    }
}
export default TodoReducer;