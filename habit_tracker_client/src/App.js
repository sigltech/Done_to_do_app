import React from 'react';
import './Assets/Styles/Css/App.css'
import { Routes, Route } from 'react-router-dom';
import { LandingPage, AppDashboard } from './Pages';
import { TodoProvider } from './Contexts/TodoContext';

function App() {
  return (
    <>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/:user_id/dashboard" element={<AppDashboard />} />
        </Routes>
      </TodoProvider>
    </>
  );
}

export default App;
