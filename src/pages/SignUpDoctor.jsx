import React, { useState } from 'react';

const SignUpDoctor = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        speciality: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/signup/doctor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert('Error: ' + result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Doctor Sign Up</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
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
                Speciality:
                <input type="text" name="speciality" value={formData.speciality} onChange={handleChange} required />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpDoctor;
