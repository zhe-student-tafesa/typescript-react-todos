import React from 'react';
import "./styles.css";
import { Todo } from '../model';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
//  React.FC   使用     <Props>
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return <div className='todos'>
        {todos.map((todo) => (
            <li>{todo.todo}</li>
        ))}
    </div>;
}

export default TodoList
