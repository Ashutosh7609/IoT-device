// Restricted text input for value
import React from 'react';
import { Form } from 'react-bootstrap';

const TextInput = ({ value, onChange }) => {
	return (
		<Form.Group>
			<Form.Control
				type="number"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder="Enter value (0-10)"
				min="0"
				max="10"
			/>
		</Form.Group>
	);
};

export default TextInput;
