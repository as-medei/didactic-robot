import React from 'react';
import type { TodoType } from '../types/todo.type';
interface Props {
  todo: TodoType;
  index: number;
  removeTodo(index: number): void;
}
const Todo = ({ todo, index, removeTodo }: Props) => {
  const options: string[] = ["Todo", "Doing", "Done"];
  const avaliableOptions = options.filter(oneOption => oneOption !== todo.status);

  return (
    <div className="todo">
      {todo.text}
      <div>
        <select>
          <option value={todo.status} key={index}>{todo.status}</option>
          {avaliableOptions.map((statusOption, index) => (
            <option value={statusOption} key={index}>{statusOption}</option>
          )
          )}
        </select>
        <button >{todo.dateString + ", 23:59"}</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
