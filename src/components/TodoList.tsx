import React from 'react'
import Todo from './Todo'

//@ts-ignore
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo: any) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

export default TodoList