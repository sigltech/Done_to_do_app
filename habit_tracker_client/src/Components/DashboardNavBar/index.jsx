import React from 'react'
import { Logout, AccountCircle } from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';

export default function DashboardNavBar({handleOpenAccountSettingsModal}) {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault()
        window.localStorage.removeItem('habitTracker-username')
        navigate('/')
    }

  return (
    <>
        <div className='dashboard-nav-container'>
            <div className='dashboard-nav'>
                <div className="avatar-container">
                    <div className="avatar">
                        <img className='avatar-img' src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png" alt="avatar" />
                    </div>
                </div>
                <div className="dashboard-nav-links">
                    <ul>
                    </ul>
                </div>
                <div className="dashboard-nav-settings">
                    {/* <div onClick={handleOpenAccountSettingsModal} className="dashboard-links-box-container">
                            <span className='dashboard-nav-settings-icons'>
                                <AccountCircle />
                            </span>
                        <a href="/" className="dashboard-nav-links-box">
                            <p>Account</p>
                        </a>
                    </div> */}
                    <div className="dashboard-links-box-container">
                        <span
                            onClick={handleLogout}
                            className='dashboard-nav-settings-icons'>

                            <Logout />

                        </span>
                        <a href="/" className='dashboard-nav-links-box'>
                            <p>Logout</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
