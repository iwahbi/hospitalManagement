import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/add-patient">Add Patient</Link></li>
                <li><Link to="/add-doctor">Add Doctor</Link></li>
                <li><Link to="/signup-patient">Sign Up Patient</Link></li>
                <li><Link to="/signup-doctor">Sign Up Doctor</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
