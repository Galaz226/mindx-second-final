import React from 'react';
import '../Styles/TodoItem.css'
import { AiFillDelete } from "react-icons/ai";
import { AiFillDownSquare } from "react-icons/ai";


function TodoItem({ todo, onDelete, onComplete }) {
  return (
    <div className="todo-item"> 
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <div className="todo-item-buttons"> 
        <button onClick={onDelete}>Xoá <AiFillDelete /></button>
        <button onClick={onComplete}>Hoàn thành <AiFillDownSquare /></button>
      </div>
    </div>
  );
}

export default TodoItem;