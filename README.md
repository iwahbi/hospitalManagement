# Healthcare Management System

A comprehensive healthcare management system enabling patients to sign up, manage their health profiles, and receive predictive health insights. Doctors can register, manage their professional profiles, and interact with patients. The system uses machine learning models to predict patient health status, recommend treatments, and suggest specialities based on patient data. Built with React for the frontend and Flask for the backend, this application leverages MongoDB for data storage and includes robust security features such as facial recognition for profile picture verification.

## Features

- **Patient Sign-Up and Profile Management**: Patients can sign up and update their health profiles with details such as personal information, health metrics, and medications.
- **Doctor Sign-Up and Profile Management**: Doctors can register and update their professional profiles, including specializations and experience.
- **Predictive Health Insights**: Machine learning models predict patient health status and provide treatment recommendations.
- **Facial Recognition**: Secure profile picture verification using facial recognition technology.
- **Notifications and Communication**: Patients receive health-related notifications, and doctors can manage appointment requests and communicate with patients.
- **Interactive Dashboard**: Visualize patient statistics and health data with interactive charts.

## Technologies Used

- **Frontend**: React, Ant Design, Chart.js
- **Backend**: Flask, TensorFlow, scikit-learn
- **Database**: MongoDB
- **Security**: Facial recognition with OpenCV and face_recognition library

## Setup and Run Instructions

### Backend Setup

1. Navigate to the `back` directory:
    ```sh
    cd back
    ```

2. Create a virtual environment:
    ```sh
    python -m venv venv
    ```

3. Activate the virtual environment:
    - On Windows:
        ```sh
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```

4. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

5. Run the backend server:
    ```sh
    python server.py
    ```

### Frontend Setup

1. Navigate to the `front` directory:
    ```sh
    cd front
    ```

2. Install the required packages:
    ```sh
    npm install
    ```

3. Run the frontend server:
    ```sh
    npm start
    ```

### Access the Application

- Open your browser and navigate to `http://localhost:3000` to access the frontend application.

## Notes

- Ensure that both the backend and frontend servers are running simultaneously.
- You may need to update the backend URL in the frontend code if they are hosted on different domains/ports.

