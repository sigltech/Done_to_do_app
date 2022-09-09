import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setActivateLogin, setModalOpen, ToggleModalOpen, ToggleModalClose }) {

    const navigate = useNavigate();

    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const handleLoginUsernameChange = (e) => {
        setLoginUsername(e.target.value)
    }

    const handleLoginPasswordChange = (e) => {
        setLoginPassword(e.target.value)
        console.log(typeof loginPassword)
    }

    const handleLogin = (e) => {
        e.preventDefault()

      const options = {
        method: 'POST',
        url: 'http://127.0.0.1:5000/login',
        auth: { username: loginUsername, password: loginPassword },
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Basic c2lnbDoxMjM0'
        },
        data: {}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data)

        // save token to local storage
        window.localStorage.setItem('habitTracker-access-token', response.data.token[0]);

        // save user id to local storage
        window.localStorage.setItem('habitTracker-user-id', response.data.token[1].user_id);

        // save username to local storage
        window.localStorage.setItem('habitTracker-username', response.data.token[1].username);

        // GET username from local storage
        const currentUsername = window.localStorage.getItem('habitTracker-username')
        if (response.status === 200) {
          console.log('Login successful');
          navigate(`/${currentUsername}/dashboard`);
        }
      }).catch(function (error) {
        console.error(error);
      });        
    }

  return (
    <>
        <div className='modal-header'>
            <div className='modal-header-text'>
                <div></div>
                <h1>Sign in</h1>
                <span className='close-modal-btn' onClick={ToggleModalClose}>x</span>
            </div>
        </div>
        <div className='modal-body'>
            <div className='modal-body-text'>
                <form onSubmit={handleLogin} className='modal-form-login'>
                    <div className='login-form-group'>
                        <label htmlFor="username">Username</label>
                        <input onChange={handleLoginUsernameChange} required type="text" name="username" id="username" />
                        <label htmlFor='password'>Password</label>
                        <input onChange={handleLoginPasswordChange} required type='password' name='password' id='password' />
                        <input type="submit" value="Log In" />
                    </div>
                </form>
            </div>
            <p>
                Don't have an account?
                <span className='change-to-register' onClick={() => setActivateLogin(false)}>Sign Up</span>
            </p>
        </div>
    </>
  )
}
