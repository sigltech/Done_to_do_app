import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register({ setActivateLogin, setModalOpen, ToggleModalOpen, ToggleModalClose }) {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [email, setEmail] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        try {
            const options = {
                method: 'POST',
                url: 'http://127.0.0.1:5000/register',
                headers: {
                    'Access-Control-Allow-Origin': '*', 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                },
                data: {
                  email: email,
                  username: username,
                  password: password,
                  passwordConfirmation: passwordConfirmation
                }
              };
              
              axios.request(options).then(function (response) {
                console.log(response.data);
              }).catch(function (error) {
                console.error(error);
              });
        } catch (error) {
            console.log(error)
        }
        setActivateLogin(true)
    }

    return (
        <>
            <div className='modal-header'>
                <div className='modal-header-text'>
                    <div></div>
                    <h1>Register</h1>
                    <span className='close-modal-btn' onClick={ToggleModalClose}>x</span>
                </div>
            </div>
            <div className='modal-body'>
                <div className='modal-body-text'>
                    <form onSubmit={handleRegistration} className='modal-form-login'>
                        <div className='login-form-group'>
                            <label htmlFor='email'>Email</label>
                            <input required onChange={handleEmailChange} type='email' name='email' id='email' />
                            <label htmlFor="username">Username</label>
                            <input required onChange={handleUsernameChange} type="text" name="username" id="username" />
                            <label htmlFor='password'>Password</label>
                            <input required onChange={handlePasswordChange} type='password' name='password' id='password' />
                            <label htmlFor="rewrite-password">rewrite-password</label>
                            <input required onChange={handlePasswordConfirmationChange} type="password" name="rewrite-password" id="rewrite-password" />
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
                <p>
                    Already have an account?
                    <span className='change-to-register' onClick={() => setActivateLogin(true)}>Sign In</span>
                </p>
            </div>
        </>
    )
}
