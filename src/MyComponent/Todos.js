import React from 'react'
import { ToDoItems } from './ToDoItems';


export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className=' my-4'>ToDos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <ToDoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )

        })}
    </div>

  )
}
