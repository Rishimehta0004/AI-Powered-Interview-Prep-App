import React from "react";
import { Routes, Route } from "react-router-dom"; // Remove Router import
import { Toaster } from "react-hot-toast";

import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import LandingPage from './pages/Landinpage';
import Dashboard from './pages/Home/Dashboard';
import InterviewPrep from './pages/InterviewPrep/InterviewPrep'
import UserProvider from "./context/userContext";

const App = () => {
  return (
    <UserProvider>
    <div>
      {/* Remove <Router> wrapper completely */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />
      </Routes>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </div>
    </UserProvider>
  )
}

export default App;