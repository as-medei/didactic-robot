import React, { ChangeEvent } from 'react';
import type { TodoType } from '../types/todo.type';
interface Props {
  todos: TodoType[];
  setTodos(newTodos: TodoType[]): void;
}

function AddTodoForm({ todos, setTodos }: Props) {
  const [value, setValue] = React.useState("");
  const [deadline, setDeadline] = React.useState("");

  const addTodo = (text: string, deadline: string) => {
    if(text!==""){
      const status: string = "Todo";
      if(deadline==="")
        deadline = "dd/mm/yyyy";
        const id:number= todos.length +1;
      const newTodos: TodoType[] = [...todos, { id,text, deadline, status }];
      setTodos(newTodos);
      setValue("");
      setDeadline("");
    }

  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  const handleChangeDeadline = (event: ChangeEvent<HTMLInputElement>): void => {
    setDeadline(event.target.value);
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
      <input
        type="Date"
        className="input"
        placeholder="Date..."
        value={deadline}
        onChange={handleChangeDeadline}
      />
      <button onClick={() => addTodo(value, deadline)}>Add Task</button>
    </div>
  );
}

export default AddTodoForm;
