import React from "react";
import Todo from "../components/Todo"
const TodoList = ({setTodos, todos}) => {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo todo={todo} setTodos={setTodos} todos={todos}  key={todo.id} text={todo.text}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
