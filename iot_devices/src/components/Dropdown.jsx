// Dropdown for selecting a device
import React from 'react';
import { Form } from 'react-bootstrap';

const Dropdown = ({ selected, onChange }) => {
	return (
		<Form.Select value={selected} onChange={(e) => onChange(e.target.value)}>
			<option value="Device 1">Device 1</option>
			<option value="Device 2">Device 2</option>
			<option value="Device 3">Device 3</option>
		</Form.Select>
	);
};

export default Dropdown;
