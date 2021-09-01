import React, { ChangeEvent } from 'react';
import type { TodoType } from '../types/todo.type';
interface Props {
  todos: TodoType[];
  setTodos(newTodos: TodoType[]): void;
}

function AddTodoForm({ todos, setTodos }: Props) {
  const [value, setValue] = React.useState("");
  const addTodo = (text: string) => {
    let date: Date = new Date();
    date.setDate(date.getDate() + 10);
    let dateString: string = date.toDateString();
    const status: string = "Todo";
    const newTodos: TodoType[] = [...todos, { text, dateString, status }];
    setTodos(newTodos);
    setValue("");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="input"
        placeholder="Todo..."
        value={value}
        onChange={handleChange}
      />
      <button onClick={() => addTodo(value)}>Add Task</button>
    </div>
  );
}

export default AddTodoForm;
