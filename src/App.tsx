import React, { useState } from 'react';

import './App.css';

import InputField from './components/InputField';
import { Todo } from './model';
// 返回值类型 ：JSX.Element
const App: React.FC = () => {
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
    </div>
  );
}

export default App;  
