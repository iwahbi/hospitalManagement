import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        password: '',
        role: ''
    });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            const userId = result.user_id;
            if (formData.role === 'patient') {
                history.push(`/signup-patient/${userId}`);
            } else if (formData.role === 'doctor') {
                history.push(`/signup-doctor/${userId}`);
            }
        } else {
            alert('Error: ' + result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label>
                Phone:
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <label>
                Role:
                <select name="role" value={formData.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                </select>
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
