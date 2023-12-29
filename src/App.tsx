import React from 'react';

import './App.css';
import { log } from 'console';
// 返回值类型 ：JSX.Element
const App: React.FC = () => {

  return (
    <div className="App">
      <span className="heading">Taskify</span>
    </div>
  );
}

export default App;
