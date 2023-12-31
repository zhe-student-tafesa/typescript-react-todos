import React from 'react';
import "./styles.css";
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
//  React.FC   使用     <Props>
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return <div className='todos'>
        {todos.map((todo) => (
            <SingleTodo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
        ))}
    </div>;
}

export default TodoList
