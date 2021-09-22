import Todo from './todo.component';
import type { TodoType } from '../types/todo.type';
interface Props {
  todos: TodoType[];
  setTodos(newTodos: TodoType[]): void;
}

function TodoList({ todos, setTodos }: Props) {
  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
        
          todo={todo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  )
};

export default TodoList;
