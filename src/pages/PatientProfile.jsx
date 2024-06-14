import React, { useState } from 'react';

const PatientProfile = ({ match }) => {
    const [profileData, setProfileData] = useState({
        full_name: '',
        gender: '',
        age: '',
        contact_preference: '',
        weight: '',
        height: '',
        mental_state: '',
        medications: '',
        profile_picture: ''
    });
    const userId = match.params.userId;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileData({ ...profileData, profile_picture: reader.result });
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
            body: JSON.stringify({ ...profileData, user_id: userId })
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
            <h2>Patient Profile</h2>
            <label>
                Full Name:
                <input type="text" name="full_name" value={profileData.full_name} onChange={handleChange} required />
            </label>
            <label>
                Gender:
                <input type="text" name="gender" value={profileData.gender} onChange={handleChange} required />
            </label>
            <label>
                Age:
                <input type="number" name="age" value={profileData.age} onChange={handleChange} required />
            </label>
            <label>
                Contact Preference:
                <input type="text" name="contact_preference" value={profileData.contact_preference} onChange={handleChange} required />
            </label>
            <label>
                Weight:
                <input type="number" name="weight" value={profileData.weight} onChange={handleChange} required />
            </label>
            <label>
                Height:
                <input type="number" name="height" value={profileData.height} onChange={handleChange} required />
            </label>
            <label>
                Mental State:
                <input type="text" name="mental_state" value={profileData.mental_state} onChange={handleChange} required />
            </label>
            <label>
                Medications:
                <input type="text" name="medications" value={profileData.medications} onChange={handleChange} required />
            </label>
            <label>
                Profile Picture:
                <input type="file" name="profile_picture" onChange={handleFileChange} required />
            </label>
            <button type="submit">Save Profile</button>
        </form>
    );
};

export default PatientProfile;
