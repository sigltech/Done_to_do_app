import React,{ useContext, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { TodoContext } from '../../Contexts/TodoContext'

export default function NewTodoItem({ getAllTodos }) {
    const [todos, setTodos] = useContext(TodoContext)
    const [todoDescription, setTodoDescription] = useState('')
    const newTodoModal = document.querySelector('.new-todo-modal-container');
    const handleTodoDescriptionChange = (e) => {
        setTodoDescription(e.target.value)
    }

    const handleNewTodoFormSubmit = (e) => {
        e.preventDefault()
        const postApiURL = 'http://127.0.0.1:5000/todos'
        const newTodoItem = {
            description: todoDescription,
            completed: false,
            username: window.localStorage.getItem('habitTracker-username')
        }
        const options = {
        method: 'POST',
        url: postApiURL,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: 'Basic c2lnbDoxMjM0'
        },
        data: newTodoItem
        };

        axios.request(options).then(function (response) {
        console.log(response.data);
        console.log('successfully added new todo item')
        getAllTodos();
        }).catch(function (error) {
        console.error(error);
        });
        newTodoModal.style.display = 'none';
        console.log('new todo item added')
        
    }

    useEffect(() => {
        const close = (e) => {
          if(e.key === 'Escape') {
            newTodoModal.style.display = 'none';
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

  return (
    <div className='new-todo-modal-container'>
        <div className='new-todo-modal'>
            <div className="newtodo-form-container">
                <form onSubmit={handleNewTodoFormSubmit} className='newtodo-form'>
                    <input onChange={handleTodoDescriptionChange} id='task-description' type="text" placeholder='e.g. ride my bike' />
                    {/* <div className="secondary-new-todo-form-elements">
                        <div className="date-time-inputs">
                        <input type="date" name="date-input" id="date-input" />
                        <input type="time" name="time-input" id="time-input" />
                        </div>
                    </div> */}
                    <button id='add-new-task-btn' type='submit'>Add</button>
                </form>
            </div>
        </div>
    </div>
  )
}
