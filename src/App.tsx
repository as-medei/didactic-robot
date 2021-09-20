import React, { FC } from "react";
import TodoPage from './pages/todoPage.component';
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <TodoPage />;
    </div>
  )
}

export default App;
