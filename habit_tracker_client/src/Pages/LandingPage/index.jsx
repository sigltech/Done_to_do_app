import React, { useState } from 'react'
import { LandingPageNavigation, AuthenticationModal } from '../../Components'

export default function LandingPage() {

  const [modalOpen, setModalOpen] = useState(false)
  const modal = document.getElementById('modal')

  const ToggleModalOpen = () => {
    setModalOpen(true)
    modal.style.display = 'none'
  }

  const ToggleModalClose = () => {
    setModalOpen(false)
    modal.style.display = 'none'
  }
  
  return (
    <>
        <LandingPageNavigation modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <div className='landing-page-main-container'>
        <h1>Habit Tracker App</h1>
        </div>
        <AuthenticationModal modalOpen={modalOpen} setModalOpen={setModalOpen}ToggleModalOpen={ToggleModalOpen} ToggleModalClose={ToggleModalClose}/>
    </>
  )
}
