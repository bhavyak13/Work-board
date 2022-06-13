import { v4 as uuid } from 'uuid';
const TodoReducer = (todos, action) => {
    switch (action.type) {
        case 'add':
            return ([...todos, {
                id: uuid(),
                task: action.task, title: action.title,
                edit: false,
                status: 'Todos'
            }]);
        case 'delete':
            return (todos.filter(todo => todo.id !== action.id));
        case 'statusChange':
            console.log(action);
            return (todos.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, status: action.status };
                }
                return todo;
            }))
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