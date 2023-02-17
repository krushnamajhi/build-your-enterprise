import React, { useState } from 'react'

export default function Todos() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({todotitle: "", description: ""})

    function handleInput(event) {
        setTodo({ ...todo, [event.target.name]: event.target.value })
      }

    function handleAdd() {
        setTodos([...todos,{date: new Date().toLocaleString(), todo: todo}])
        setTodo({todotitle: "", description: "", time: ""})
    }

  return (
    <div>
        <center>Todos</center>
        <div style={{border: "2px solid black", width: "300px", height: "200px"}}>
            <div style={{padding: "6px"}}>
                <label for="todotitle">Title:</label>
                <input name="todotitle" value={todo.todotitle} onChange={handleInput}/>
            </div>
            <div style={{padding: "6px"}}>
                <label for="description">Description:</label>
                <textarea name="description" rows="5" cols="35" value={todo.description} onChange={handleInput}/>
            </div>
            <div style={{padding: "6px"}}>
                <button onClick={handleAdd} type="button">Add</button>
            </div>
        </div>
        <div>
            { todos.map((todo, index) =>  
            <div key={index} style={{border: "2px solid black", width: "300px", height: "200px", margin:"20px"}}>
                <h2 style={{padding: "6px"}}>{todo.todo.todotitle}</h2>
                <p style={{padding: "6px"}}>{todo.todo.description}</p>
                <p>Added on {todo.date}</p>
                </div>
                )}
        </div>
    </div>
  )
}
