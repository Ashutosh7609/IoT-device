// Main Dashboard page
import React, { useState, useEffect } from 'react'
import Dropdown from '../components/Dropdown'
import Graph from '../components/Graph'
import TextInput from '../components/TextInput'
import { updateDeviceData, fetchDeviceData } from '../utils/api'
import { Container, Row, Col, Button, Alert } from 'react-bootstrap'

const Dashboard = () => {
	const [selectedDevice, setSelectedDevice] = useState("Device 1")
	const [graphData, setGraphData] = useState({ "Device 1": [], "Device 2": [], "Device 3": [] })
	const [value, setValue] = useState("")
	const [error, setError] = useState("")

	// Fetch data for all devices when the component mounts
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchDeviceData()
			setGraphData(data)
		}
		fetchData()
	}, []);

	// Handle submit button click
	const handleSubmit = async () => {
		const numericValue = parseFloat(value.trim())

		if (isNaN(numericValue) || numericValue < 0 || numericValue > 10) {
			setError("Value must be a number between 0 and 10.");
			return;
		}

		setError(""); // Clear any previous errors

		try {
				await updateDeviceData(selectedDevice, numericValue);
				const newData = [
						...graphData[selectedDevice],
						{ timestamp: new Date().toLocaleTimeString(), value: numericValue },
				];
				setGraphData({ ...graphData, [selectedDevice]: newData });
		} catch (err) {
				setError(err.message); // Display error returned by the API
		}
	};

	return (
		<Container className="my-4">
			<Row className="mb-4">
				<Col>
				<h1 className="text-center">IoT Dashboard</h1>
				</Col>
			</Row>

			<Row className="mb-3">
				<Col md={4}>
				<Dropdown selected={selectedDevice} onChange={setSelectedDevice} />
				</Col>
				<Col md={4}>
				<TextInput value={value} onChange={setValue} />
				{error && <Alert variant="danger">{error}</Alert>}
				</Col>
				<Col md={4}>
				<Button onClick={handleSubmit} variant="success" className="w-100">
					Submit
				</Button>
				</Col>
			</Row>

			<Row className="justify-content-center">
				<Col>
					<div className="graph-container">
						<Graph
						key={selectedDevice} // Add a unique key to force re-render
						data={graphData[selectedDevice]}
						title={selectedDevice}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
