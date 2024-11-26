# IoT Dashboard

## Overview

This project is an interactive **IoT Dashboard** built using **React** for the frontend and **Flask** for the backend. It visualizes real-time data from three IoT devices, allowing users to select a device and update its data through a dynamic graph. The dashboard supports real-time updates with a user-friendly interface and stores data persistently in a JSON file.

## Features

- **Real-time Data Visualization**: Displays graphs for three IoT devices.
- **Dynamic Updates**: Users can select a device from a dropdown and enter a value (0-10) to update the graph.
- **Responsive Design**: The dashboard adjusts to various screen sizes, providing a seamless experience on both mobile and desktop devices.
- **Data Storage**: Device data is stored in a `database.json` file and persists between page refreshes (if within the last hour).
- **Backend API**: Flask-based API handles device data updates and retrieves the stored data.

## Technologies

- **Frontend**: React, Bootstrap, Chart.js
- **Backend**: Flask (Python)
- **Data Storage**: JSON file (`database.json`)
- **Styling**: Bootstrap for layout and responsiveness

## Installation

### Prerequisites

- Node.js (for React)
- Python 3.x (for Flask)

### Steps

1. **Clone the repository**:
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>

2. **Frontend Setup**:
   npm install
   npm start

3. **Backend Setup**:
   python -m venv iot_api
   source iot_api/bin/activate
   pip install -r requirements.txt
   python3 app.py

