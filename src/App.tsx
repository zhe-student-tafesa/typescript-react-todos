import React, { useState } from 'react';

import './App.css';

import InputField from './components/InputField';
// 返回值类型 ：JSX.Element
const App: React.FC = () => {
  // type of todo: <string>, value is     ""
  const [todo, setTodo] = useState<string>("");
  // 使用 InputField 组件
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;  
