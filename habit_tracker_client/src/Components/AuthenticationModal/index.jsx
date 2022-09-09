import React from 'react'
import { useState } from 'react'
import Login from '../Login'
import Register from '../Register'

export default function AuthenticationModal({ setModalOpen, modalOpen, ToggleModalOpen, ToggleModalClose }) {
    const [activateLogin, setActivateLogin] = useState(true)

  return (
    <div id='modal' className='modal-container'>
        <div className='modal'>
            {activateLogin ? 
                <Login setActivateLogin={setActivateLogin} setModalOpen={setModalOpen} modalOpen={modalOpen} ToggleModalOpen={ToggleModalOpen} ToggleModalClose={ToggleModalClose} /> 
                : 
                <Register setActivateLogin={setActivateLogin} setModalOpen={setModalOpen} modalOpen={modalOpen} ToggleModalOpen={ToggleModalOpen} ToggleModalClose={ToggleModalClose} />}
        </div>
    </div>
  )
}
