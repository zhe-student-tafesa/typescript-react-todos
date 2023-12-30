// https://react-icons.github.io/react-icons/
import React, { useEffect, useRef, useState } from 'react';
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

    // 声明一个状态变量edit, 初始值 false
    const [edit, setEdit] = useState<boolean>(false);
    // 声明一个状态变量editTodo , 初始值 todo.todo
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    // => 是箭头函数的语法
    // 箭头函数的优势之一是它自动绑定了 this
    const handleDone = (id: number) => {
        // setTodos(
        //     todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
        // );
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: !todo.isDone };
                } else {
                    return todo;
                }
            })
        );

    };
    const handleDelete = (id: number) => {
        setTodos(
            todos.filter((todo) => (todo.id !== id))
        );

    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, todo: editTodo } : todo
        )));
        setEdit(false);

    };

    const inputRef = useRef<HTMLInputElement>(null);

    // 当 edit 变化时，input 获得 焦点
    // 这段代码使用了useEffect，当edit发生变化时，
    // 它会调用inputRef.current?.focus()。这意味着如果edit为true，
    // 则尝试将焦点聚焦到inputRef引用的HTMLInputElement上。
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
        {
            edit ?
                (<input
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className='todos__single--text'

                />)
                :
                (todo.isDone ?
                    (<s className="todos__single--text">
                        {todo.todo}
                    </s>)
                    : (<span className="todos__single--text">
                        {todo.todo}
                    </span>))
        }
        <div>
            <span className='icon' onClick={() => {
                if (!edit && !todo.isDone) {
                    setEdit(!edit);
                }
            }}> <AiFillEdit /> </span>
            <span className='icon' onClick={() => handleDelete(todo.id)} > <MdDelete /></span>
            <span className='icon' onClick={() => handleDone(todo.id)}> <MdDownloadDone /></span>
        </div>
    </form>;

}

export default SingleTodo 
