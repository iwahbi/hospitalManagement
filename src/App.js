

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import AddPatient from './pages/AddPatient';
import AddDoctor from './pages/AddDoctor';
import SignUpPatient from './pages/SignUpPatient';
import SignUpDoctor from './pages/SignUpDoctor';
import UserTypeSelection from './pages/UserTypeSelection';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/add-patient" element={<AddPatient />} />
                <Route path="/add-doctor" element={<AddDoctor />} />
                <Route path="/signup-patient" element={<SignUpPatient />} />
                <Route path="/signup-doctor" element={<SignUpDoctor />} />
                <Route path="/" element={<UserTypeSelection />} />
            </Routes>
        </Router>
    );
}

export default App;
