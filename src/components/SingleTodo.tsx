// https://react-icons.github.io/react-icons/
import React from 'react';
import { Todo } from '../model';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
import "./styles.css";


//   使用 interface
// interface Props {
//     todo: Todo;
//     todos: Todo[];
//     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
// }
// 这样 使用 type 也行
type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    // => 是箭头函数的语法
    // 箭头函数的优势之一是它自动绑定了 this
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        );

    };

    return <form className="todos__single">
        {
            todo.isDone ?
                (<s className="todos__single--text">
                    {todo.todo}
                </s>)
                : (<span className="todos__single--text">
                    {todo.todo}
                </span>)
        }
        <div>
            <span className='icon'> <AiFillEdit /> </span>
            <span className='icon'> <MdDelete /></span>
            <span className='icon' onClick={() => handleDone(todo.id)}> <MdDownloadDone /></span>
        </div>
    </form>;

}

export default SingleTodo 
