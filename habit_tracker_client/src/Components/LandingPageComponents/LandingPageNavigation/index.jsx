import React from 'react'

export default function LandingPageNavigation({ modalOpen, setModalOpen }) {

    const openAuthModal = () => {
        const modal = document.getElementById('modal')
        modal.style.display = 'block'
        setModalOpen(true)
    }

  return (
    <>
        <div className="navigation-container">
            <div className="navbar-container">
                <div className="nav-elements">
                    <ul className='flex-row-justify-between'>
                        <div className="flex-row left-nav-elements">
                        <a className='nav-links' href="/">
                            <span></span>
                            <p>home</p>
                        </a>
                        <a className='nav-links' href="/">
                            <span className="nav-icon"></span>
                            <p>about</p>
                        </a>
                        </div>
                        <div className="right-nav-elements">
                            <button>
                                <span onClick={openAuthModal} className="auth-btns login">Login/sign up</span>
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
