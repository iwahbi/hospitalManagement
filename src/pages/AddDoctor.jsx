import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';

const AddDoctor = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        speciality: '',
        department: '',
    });

    const [doctors, setDoctors] = useState([]);
    const [specialities, setSpecialities] = useState(new Set());
    const [departments, setDepartments] = useState(new Set());
    const handleTableRowClick = (doctor) => {
        // Mettre à jour le formulaire avec les informations du médecin
        setFormData({
            name: doctor.name,
            age: doctor.age,
            gender: doctor.gender,
            speciality: doctor.speciality,
            department: doctor.department,
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Envoie les données du formulaire au serveur Flask
        axios.post("http://localhost:5000/api/doctors/create", formData)
            .then((res) => {
                // Affichez la réponse du serveur ou effectuez d'autres actions en cas de succès
                console.log("Données envoyées avec succès :", res.data);

                // Affichez un message de confirmation à l'utilisateur
                alert("Médecin ajouté avec succès");

                // Réinitialisez le formulaire après l'envoi
                setFormData({
                    name: '',
                    age: '',
                    gender: '',
                    speciality: '',
                    department: '',
                });
            })
            .catch((error) => {
                // Gérez les erreurs en cas d'échec de la requête
                console.error("Erreur lors de l'envoi des données :", error);
            });
    };


    useEffect(() => {
        // Fetch data from backend API
        axios.get("http://localhost:5000/api/doctors").then((res) => {
            setDoctors(res.data);
            const doctorData = res.data;
            const uniqueSpecialities = new Set();
            const uniqueDepartments = new Set();

            // Extract unique specialities and departments
            doctorData.forEach((doctor) => {
                uniqueSpecialities.add(doctor.speciality);
                uniqueDepartments.add(doctor.department);
            });

            // Update state with unique values
            setSpecialities(uniqueSpecialities);
            setDepartments(uniqueDepartments);
        });
    }, []);

    return (
        <div className="bg-white">
            <Navbar />
            <div className="d-flex justify-content-center min-vh-60">
                <div className="col-md-6">
                    <h2 className="text-center">Ajouter un médecin</h2>
                    <form onSubmit={handleSubmit} className="mx-auto">
                        <div className="mb-3">
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
                        <div className="mb-3">
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
                        <div className="mb-3">
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
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="speciality" className="form-label">
                                Spécialité
                            </label>
                            <select
                                className="form-select"
                                id="speciality"
                                name="speciality"
                                value={formData.speciality}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Sélectionnez une spécialité</option>
                                {[...specialities].map((speciality) => (
                                    <option key={speciality} value={speciality}>
                                        {speciality}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="department" className="form-label">
                                Département
                            </label>
                            <select
                                className="form-select"
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Sélectionnez un département</option>
                                {[...departments].map((department) => (
                                    <option key={department} value={department}>
                                        {department}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                Ajouter le médecin
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="col-md-11">
                    <h2 className="text-center">Liste des médecins</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Âge</th>
                                <th>Genre</th>
                                <th>Spécialité</th>
                                <th>Département</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doctor) => (
                                <tr key={doctor.id} onClick={() => handleTableRowClick(doctor)}>                                    <td>{doctor.name}</td>
                                    <td>{doctor.age}</td>
                                    <td>{doctor.gender}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.department}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;
