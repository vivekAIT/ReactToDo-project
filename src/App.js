import './App.css';
import Header from "./MyComponent/Header";
import Todos from "./MyComponent/Todos";
import { About } from './MyComponent/About';
import { Footer } from "./MyComponent/Footer";
import { AddToDo } from './MyComponent/AddToDo';

import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Home } from './MyComponent/Home';
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am on deletee ok", todo);
    // deleting this way doesn't work like this in react
    // let index = todos.indexOf(todo);  variable splice krne delete nhi hota we have to use useState hook
    // todos.splice(index,1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addToDo = (title, desc) => {
    console.log("i am adding todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    // localStorage.setItem("todos",JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title="My ToDos list" searchBar={false} />
        <Routes>
          <Route path="/" element={
            <>
              <AddToDo addToDo={addToDo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />
          <Route path="/Home" element={<Home />} />

          <Route path="/about" element={<About />} />

        </Routes>


        <Footer />
      </Router>
    </>
  );
}
export default App;
