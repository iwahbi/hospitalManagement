import React, { useState } from 'react';

const DoctorProfile = ({ match }) => {
    const [profileData, setProfileData] = useState({
        age: '',
        specialization: '',
        experiences: '',
        bio: '',
        gender: ''
    });
    const userId = match.params.userId;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/signup/doctor', {
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
            <h2>Doctor Profile</h2>
            <label>
                Age:
                <input type="number" name="age" value={profileData.age} onChange={handleChange} required />
            </label>
            <label>
                Specialization:
                <input type="text" name="specialization" value={profileData.specialization} onChange={handleChange} required />
            </label>
            <label>
                Experiences:
                <input type="text" name="experiences" value={profileData.experiences} onChange={handleChange} required />
            </label>
            <label>
                Bio:
                <textarea name="bio" value={profileData.bio} onChange={handleChange} required />
            </label>
            <label>
                Gender:
                <input type="text" name="gender" value={profileData.gender} onChange={handleChange} required />
            </label>
            <button type="submit">Save Profile</button>
        </form>
    );
};

export default DoctorProfile;
