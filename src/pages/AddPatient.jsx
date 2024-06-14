import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';

const AddPatient = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        pulse: '',
        blood_pressure: '',
        temperature: '',
        disease: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const handleRowClick = (patient) => {
        setFormData({
            name: patient.name,
            age: patient.age,
            gender: patient.gender,
            pulse: patient.pulse,
            blood_pressure: patient.blood_pressure,
            temperature: patient.temperature,
            disease: patient.disease,
        });
        setIsEditing(true);
    };

    const [patients, setPatients] = useState([]);
    const [patientData, setPatientData] = useState([]);
    const maladies = [
        "Inflammation",
        "Migraine",
        "Cold",
        "Gastritis",
        "Diabetes",
        "Hypertension",
        "Asthma",
        "Fever",
        "Food allergy",
        "Bone fracture",
        "Flu",
        "Anxiety",
        "Cancer",
        "Acne",
        "Diarrhea",
        "Insomnia",
        "Sinusitis",
        "Gastric ulcer",
        "High cholesterol",
        "Depression",
        "Mumps",
        "Alopecia (hair loss)",
        "Arthritis",
        "Back pain",
        "Osteoporosis",
        "Hepatitis",
        "Obesity",
        "Glaucoma",
        "Cystitis (urinary infection)",
        "Asthma",
        "Eczema",
        "Tension headache",
        "Lupus",
        "Endometriosis",
        "Anemia",
        "Parkinson's",
        "Multiple sclerosis",
        "Pneumonia",
        "Fibromyalgia",
        "Glaucoma",
        "Hemorrhoids",
        "Bipolar disorder",
        "Gastric acidity",
        "Irritable bowel syndrome"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        setIsEditing(false);
        e.preventDefault();
        // Envoyer les données au serveur
        axios.post("http://localhost:5000/api/patient/create", formData)
            .then((response) => {
                console.log(response.data); // Afficher la réponse du serveur
                // Réinitialiser le formulaire après l'ajout réussi du patient
                setFormData({
                    name: '',
                    age: '',
                    gender: '',
                    pulse: '',
                    blood_pressure: '',
                    temperature: '',
                    disease: '',
                });
            })
            .catch((error) => {
                console.error('Une erreur s\'est produite :', error);
            });
    };


    useEffect(() => {
        // Fetch data from backend API
        axios.get("http://localhost:5000/api/patients").then((res) => {
            setPatients(res.data);
            // Format the patient data for the chart
            let data = [];
            let normal = 0;
            let critical = 0;
            let emergency = 0;
            for (let p of res.data) {
                // Count the number of patients in each status
                if (p.status === "Normal") normal++;
                if (p.status === "Critical") critical++;
                if (p.status === "Emergency") emergency++;
                // Add a new data point with the current counts
                data.push({ normal, critical, emergency });
            }
            setPatientData(data);
        });
    }, []);

    return (
        <div className="bg-white">
            <Navbar />
            <div className="d-flex justify-content-center min-vh-60">
                <div className="col-md-6">
                    <h2 className="text-center">Ajouter un patient</h2>
                    <form onSubmit={handleSubmit} className="mx-auto">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="age" className="form-label">
                                    Âge
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="gender" className="form-label">
                                    Genre
                                </label>
                                <select
                                    className="form-select"
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Sélectionnez le genre</option>
                                    <option value="M">M</option>
                                    <option value="F">F</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="pulse" className="form-label">
                                    Pouls
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="pulse"
                                    name="pulse"
                                    value={formData.pulse}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="blood_pressure" className="form-label">
                                    Tension artérielle
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blood_pressure"
                                    name="blood_pressure"
                                    value={formData.blood_pressure}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="temperature" className="form-label">
                                    Température
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="temperature"
                                    name="temperature"
                                    value={formData.temperature}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="disease" className="form-label">
                                    Maladie
                                </label>
                                <select
                                    className="form-select"
                                    id="disease"
                                    name="disease"
                                    value={formData.disease}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Sélectionnez une maladie</option>
                                    {maladies.map((maladie, index) => (
                                        <option key={index} value={maladie}>
                                            {maladie}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <h2 className="text-center">Gestion des patients</h2>
                            <div className="d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className={`btn btn-primary ${isEditing ? 'disabled' : ''}`}
                                >
                                    Ajouter Patient
                                </button>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className={`btn btn-secondary ${!isEditing ? 'disabled' : ''}`}
                                >
                                    Annuler la modification
                                </button>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className={`btn btn-primary ${!isEditing ? 'disabled' : ''}`}
                                >
                                    Modifier Patient
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-12"> 
                <div className="col-md-11"> 
                    <h2 className="text-center">Liste des patients</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Âge</th>
                                <th>Sexe</th>
                                <th>Pouls</th>
                                <th>Tension</th>
                                <th>Température</th>
                                <th>État</th>
                                <th>Maladie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id} onClick={() => handleRowClick(patient)}>
                                    <td>{patient.name}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.pulse}</td>
                                    <td>{patient.blood_pressure}</td>
                                    <td>{patient.temperature}</td>
                                    <td>{patient.status}</td>
                                    <td>{patient.disease}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddPatient;
