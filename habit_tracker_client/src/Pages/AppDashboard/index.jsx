import React, {useState, useContext} from 'react'
import { DashboardNavBar, DashboardHeaderNav, TodoBoard, NewTodoItem, AccountSettingsModal } from '../../Components'
import { TodoContext } from '../../Contexts/TodoContext.jsx'
import axios from 'axios'

export default function AppDashboard() {
  const [todos, setTodos] = useContext(TodoContext)

  const handleOpenAccountSettingsModal = (e) => {
    e.preventDefault()
    const accountSettingsModal = document.querySelector('.account-settings-modal-container')
    accountSettingsModal.classList.add('account-settings-modal-active')
  }

  const getAllTodos = () => {
    const options = {
      method: 'GET',
      url: 'http://127.0.0.1:5000/todos',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: 'Basic c2lnbDoxMjM0'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setTodos(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <>
        <div className="dashboard-page-container">
        <DashboardNavBar handleOpenAccountSettingsModal={handleOpenAccountSettingsModal}/>
          <div className='dashboard-main-content'>
              <DashboardHeaderNav />
              <TodoBoard getAllTodos={getAllTodos}/>
              <NewTodoItem getAllTodos={getAllTodos}/>
              <AccountSettingsModal />
          </div>
        </div>
    </>
  )
}
