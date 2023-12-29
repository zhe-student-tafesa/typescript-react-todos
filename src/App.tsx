import React, { useState } from 'react';

import './App.css';

import InputField from './components/InputField';
import { Todo } from './model';
// 返回值类型 ：JSX.Element
const App: React.FC = () => {
  // type of todo: <string>, value is     ""
  const [todo, setTodo] = useState<string>("");
  // for debug
  console.log(todo);

  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = () => { };

  // 使用 InputField 组件
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={function (): void {
      }} />
    </div>
  );
}

export default App;  
