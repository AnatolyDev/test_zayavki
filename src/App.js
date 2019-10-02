import React from 'react';
import './App.css';

import Menu from './Components/Menu';
import Header from './Components/Header';

function App() {
  return (
    <div className="flex-container">
      <div className="menu">
        <Menu />
      </div>
      <div className="rightarea">
        <div className="header">
          Заголовок
        </div>
        <div className="content">
          Контент
        </div>
      </div>
    </div>
  );
}

export default App;
