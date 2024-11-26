from flask import Flask, jsonify, request
from datetime import datetime
import json
from utils import filter_recent_data, load_data, save_data
from flask_cors import CORS

app = Flask(__name__)
DB_FILE = "database.json"

# Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Endpoint to fetch data for all devices
@app.route("/devices", methods=["GET"])
def get_devices():
    try:
        # Load the data from the JSON file
        data = load_data()
        # Filter data to include only entries from the last 1 hour
        recent_data = filter_recent_data(data, hours=1)
        return jsonify(recent_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Endpoint to update device data
@app.route('/update', methods=['POST'])
def update_device():
    try:
        data = request.json
        device = data.get('device')
        value = data.get('value')

        # Validate the value
        if not isinstance(value, (int, float)):
            return jsonify({"error": "Value must be a number"}), 400
        if not (0 <= value <= 10):
            return jsonify({"error": "Value must be between 0 and 10"}), 400

        # Load existing data
        devices_data = load_data()

        # Update the device data
        new_entry = {"timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"), "value": value}
        devices_data[device].append(new_entry)

        # Save updated data to the JSON file
        save_data(devices_data)

        return jsonify({"message": "Data updated successfully", "data": new_entry}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
