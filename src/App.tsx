import React, { useState } from 'react';

import './App.css';

import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
// 返回值类型 ：JSX.Element
const App: React.FC = () => {
  // 这一行代码使用了React的useState hook。它的目的是在React函数组件中声明一个状态变量todo，并提供一个用于更新该状态的函数setTodo。
  // useState的参数是状态的初始值的类型，这里是string，并且初始值是一个空字符串""。
  // 这行代码相当于在类组件中使用this.state = { todo: "" }，但是使用hook的方式更加简洁。
  // type of todo: <string>, value is     ""
  const [todo, setTodo] = useState<string>("");
  // for debug
  //console.log(todo);

  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    //e without type:
    // error: Parameter 'e' implicitly has an 'any' type.
    // google search: event type in react typescript
    e.preventDefault();
    if (todo) {
      //??
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      //??   //??  
      setTodo("");

    }

  };
  // for debug
  console.log(todos);

  // 使用 InputField 组件
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;  
