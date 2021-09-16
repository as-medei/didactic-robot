import React from 'react';
import TodoList from '../components/todoList.component';
import AddTodoForm from '../components/addTodoForm.component';
import './todoPage.css';
import type { TodoType } from '../types/todo.type';

function TodoPage() {
  const [todos, setTodos] = React.useState<TodoType[]>([
    {
      text: "Learn about React",
      status: "Todo",
      deadline: new Date().toDateString()
    },
    {
      text: "Meet friend for lunch",
      status: "Todo",
      deadline: new Date().toDateString()
    },
    {
      text: "Build really cool todo app",
      status: "Done",
      deadline: new Date().toDateString()
     }
  ]);


  return (
    <div className="todo-page">
      <TodoList
        todos = {todos}
        setTodos = {setTodos}
      />
      <AddTodoForm
        todos = {todos}
        setTodos = {setTodos}
      />
    </div>
  );
}

export default TodoPage;
