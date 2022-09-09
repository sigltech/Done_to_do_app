import React,{ useState } from 'react'
import { AddCircleOutline, CloseFullscreen, KeyboardTab } from '@mui/icons-material/';

export default function DashboardHeaderNav() {

    const [showDashboardNav, setShowDashboardNav] = useState(false);

    const handleOpenNewItemModal = (e) => { 
        e.preventDefault()
        const newTodoModal = document.querySelector('.new-todo-modal-container')
        newTodoModal.style.display = 'flex'
    }

    const handleSidebarOpenClose = (e) => {
        e.preventDefault()
        const sidebar = document.querySelector('.dashboard-nav-container')
        const dashboardNavLinks = document.querySelectorAll('.dashboard-nav-links-box')
        if(!showDashboardNav) {
            sidebar.style.width = '90px'
            setShowDashboardNav(true)
            dashboardNavLinks.forEach(link => {
                link.style.display = 'none'
            })
        } else {
            sidebar.style.width = '220px'
            setShowDashboardNav(false)
            dashboardNavLinks.forEach(link => {
                link.style.display = 'flex'
            })
        }

    }

  return (
    <div className='headernav-outerContainer'>
        <div className='headernav-container'>
            <div className='headernav'>
                <div className='headernav-left'>
                <ul className="dashboard-nav-list">
                    <a href="/" className='dashboard-header-nav-link'>
                        <span onClick={handleSidebarOpenClose}  className='dashboard-header-nav-icon close-sidebar'>
                            {!showDashboardNav ? <CloseFullscreen /> : <KeyboardTab />}
                        </span>
                        <p></p>
                    </a>
                </ul>
                </div>
                <div className='headernav-top-right-btn-group'>
                <ul className="dashboard-nav-list">
                    <a onClick={handleOpenNewItemModal} href="/" className='dashboard-header-nav-link new-task'>
                        <span className='dashboard-header-nav-icon add-task-icon'>
                            <AddCircleOutline 
                                sx={{
                                    fontSize: '2rem',
                                }}/>
                        </span>
                        <p>Add New task</p>
                    </a>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
