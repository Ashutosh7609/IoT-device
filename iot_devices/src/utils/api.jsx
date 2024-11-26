// API utility functions for frontend-backend communication
const API_URL = "http://127.0.0.1:5000"; // Backend URL

// Fetch all device data from the backend
export const fetchDeviceData = async () => {
	const response = await fetch(`${API_URL}/devices`);
	return await response.json();
};

// Send updated device data to the backend
export const updateDeviceData = async (device, value) => {
	const response = await fetch(`${API_URL}/update`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ device, value }),
	});
	return await response.json();
};
