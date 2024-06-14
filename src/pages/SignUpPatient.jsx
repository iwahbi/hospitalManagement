import React, { useState } from 'react';
import './SignUp.css';

const SignUpPatient = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        age: '',
        contact_preference: '',
        weight: '',
        height: '',
        mental_state: '',
        medications: '',
        profile_picture: '',
        diagnosis: ''  // Adding diagnosis field
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData({ ...formData, profile_picture: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/signup/patient', {
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
            <h2>Patient Sign Up</h2>
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
                Gender:
                <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
            </label>
            <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </label>
            <label>
                Contact Preference:
                <input type="text" name="contact_preference" value={formData.contact_preference} onChange={handleChange} required />
            </label>
            <label>
                Weight:
                <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
            </label>
            <label>
                Height:
                <input type="number" name="height" value={formData.height} onChange={handleChange} required />
            </label>
            <label>
                Mental State:
                <input type="text" name="mental_state" value={formData.mental_state} onChange={handleChange} required />
            </label>
            <label>
                Medications:
                <input type="text" name="medications" value={formData.medications} onChange={handleChange} required />
            </label>
            <label>
                Diagnosis:
                <input type="text" name="diagnosis" value={formData.diagnosis} onChange={handleChange} required />
            </label>
            <label>
                Profile Picture:
                <input type="file" name="profile_picture" onChange={handleFileChange} required />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpPatient;
