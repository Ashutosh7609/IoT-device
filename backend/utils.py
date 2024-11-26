import json
from datetime import datetime, timedelta

def filter_recent_data(data, hours=1):
    """
    Filters data to include only entries from the last `hours` hours.
    """
    now = datetime.now()
    cutoff_time = now - timedelta(hours=hours)
    filtered_data = {}

    for device, entries in data.items():
        filtered_entries = [
            entry for entry in entries
            if datetime.strptime(entry['timestamp'], "%Y-%m-%d %H:%M:%S") >= cutoff_time
        ]
        filtered_data[device] = filtered_entries

    return filtered_data

# Load the existing data from the database (JSON file)
def load_data():
    file_path = 'database.json'  # Define the file path here
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {"Device 1": [], "Device 2": [], "Device 3": []}  # Default data if file doesn't exist

# Save the updated data to the database (JSON file)
def save_data(devices_data):
    file_path = 'database.json'  # Define the file path here as well
    try:
        with open(file_path, 'w') as f:
            json.dump(devices_data, f, indent=4)  # Ensure that data is written with indentation for readability
    except Exception as e:
        print(f"Error saving data: {e}")
