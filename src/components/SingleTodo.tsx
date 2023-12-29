// https://react-icons.github.io/react-icons/
import React from 'react';
import { Todo } from '../model';

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
    return <div>

    </div>;

}

export default SingleTodo 
