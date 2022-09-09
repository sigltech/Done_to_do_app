import React from 'react'

export default function AccountSettingsModal() {

    const handleCloseAccountSettingsModal = (e) => {
        e.preventDefault()
        const accountSettingsModal = document.querySelector('.account-settings-modal-container')
        accountSettingsModal.classList.remove('account-settings-modal-active')
    }

    const handleChangeUsername = (e) => {
        e.preventDefault()
        const usernameBtn = document.querySelector('#change-username-btn')
        usernameBtn.style.display = 'none'
        const newUsernameInputDiv = document.createElement('div')
        const newUsernameInput = document.createElement('input')
        newUsernameInputDiv.classList.add('new-username-input-div')
        newUsernameInput.classList.add('new-username-input')
        newUsernameInput.placeholder = 'New Username'
        newUsernameInput.id = 'new-username-input'
        newUsernameInputDiv.appendChild(newUsernameInput)

    }

  return (
    <div className='account-settings-modal-container'>
        <div className='account-settings-modal'>
            <div className='account-settings-modal-header'>
                <h1 className='account-settings-modal-header-title'>Account Settings</h1>
                <span onClick={handleCloseAccountSettingsModal} className='close-settings-btn'>x</span>
            </div>
            <div className='account-settings-modal-body'>
                <div className='account-settings-modal-body-inner'>
                    <div onClick={handleChangeUsername} id='change-username-btn' className="change-username-btn">
                        <span>change Username</span>
                    </div>
                    <div id='change-password-btn' className="change-password-btn">
                        <span>change Password</span>
                    </div>
                    <div id='change-email-btn' className="change-email-btn">
                        <span>change Email</span>
                    </div>
                    <div id='delete-account-btn' className="delete-account-btn">
                        <span>Delete Account</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
