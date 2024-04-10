import React, { useState } from 'react';
import TodoItem from './Components/TodoItem';
import './Styles/TodoList.css';
import { AiFillEdit, AiFillCheckCircle, AiFillFire, AiFillReconciliation, AiFillRead, AiFillDelete } from "react-icons/ai";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const handleDeleteAll = () => {
    setTodos([]); 
  };

  return (
    <div className="todo-container"> 
      <h1>Todo List <AiFillRead /></h1>
      <div className="todo-input"> 
        <input placeholder='Name your list'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Thêm <AiFillEdit /></button>
      </div>
      <button onClick={handleDeleteAll} className="delete-all-button">Delete All <AiFillDelete /></button>
      <div className="todo-categories">
        <div className="todo-category">
          <h2>All <AiFillReconciliation /></h2>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDelete={() => handleDeleteTodo(index)}
              onComplete={() => handleCompleteTodo(index)}
            />
          ))}
        </div>
        <div className="todo-category">
          <h2>Active <AiFillFire /></h2>
          {todos.filter(todo => !todo.completed).map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDelete={() => handleDeleteTodo(index)}
              onComplete={() => handleCompleteTodo(index)}
            />
          ))}
        </div>
        <div className="todo-category">
          <h2>Complete <AiFillCheckCircle /></h2>
          {todos.filter(todo => todo.completed).map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onDelete={() => handleDeleteTodo(index)}
              onComplete={() => handleCompleteTodo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
