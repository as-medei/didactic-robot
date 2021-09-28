import React, { ChangeEvent } from 'react';
import type { TodoType } from '../types/todo.type';
interface Props {
  todo: TodoType;
  removeTodo(id: number): void;
}
const Todo = ({ todo, removeTodo }: Props) => {
  const options: string[] = ["Todo", "Doing", "Done"];
  const avaliableOptions = options.filter(oneOption => oneOption !== todo.status);
  const [selectedOption, setSelectedOption] = React.useState("");
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    setSelectedOption(value);
    todo.status = selectedOption;
    console.log(todo.status);

  };

  return (
    <div className="todo">
      {todo.text}
      <div>
        <select value={todo.status} onChange={handleSelectChange}>
          <option value={todo.status} key={todo.id}>{todo.status}</option>
          {avaliableOptions.map((statusOption, index) => (
            <option value={statusOption} key={index}>{statusOption}</option>
          )
          )}
        </select>
        <span className="deadline">{todo.deadline }</span>
        <button onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
