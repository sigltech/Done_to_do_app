import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { TodoContext } from '../../Contexts/TodoContext.jsx'

export default function TodoBoard({ getAllTodos }) {
  const [todos, setTodos] = useContext(TodoContext)

  const handleCompleteTask = (e) => {
    e.preventDefault();
    const tableRowId = e.target.parentElement.parentElement.id

    const options = {
      method: 'PUT',
      url: `http://127.0.0.1:5000/todos/${tableRowId}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: 'Basic c2lnbDoxMjM0'
      },
      data: {completed: true}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      getAllTodos();
    }).catch(function (error) {
      console.error(error);
    });

    getAllTodos()
  }

  const handleDeleteTask = (e) => {
    const tableRowId = e.target.parentElement.parentElement.id

    const options = {
      method: 'DELETE',
      url: `http://127.0.0.1:5000/todos/${tableRowId}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: 'Basic c2lnbDoxMjM0'
      },
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      getAllTodos();
    }).catch(function (error) {
      console.error(error);
    });

    getAllTodos()
  }

  useEffect(() => {
    getAllTodos()
  }, [])

  return (
    <div className='todo-outer-container'>
      <div className='todo-inner-container'>
        <h2>All Tasks</h2>
        <table className='todo-table'>
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.filter(todo => todo.username === window.localStorage.getItem('habitTracker-username') && todo.completed === false).map(todo => {
              return (
                <tr key={todo.id} id={todo.id} className='todo-items-row'>
                  <td>{todo.description}</td>
                  <td className='list-actions'>
                    <button onClick={handleCompleteTask}>Complete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <hr id='seperator-line' />
      <div className='completed-tasks-todo-inner-container'>
        <h2>Completed Tasks</h2>
        <table className='todo-table'>
          <thead>
            <tr>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.filter(todo => todo.username === window.localStorage.getItem('habitTracker-username') && todo.completed === true).map(todo => {
              return (
                <tr key={todo.id} id={todo.id} className='todo-items-row'>
                  <td>{todo.description}</td>
                  <td className='list-actions'>
                    <button onClick={handleDeleteTask}>x</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
