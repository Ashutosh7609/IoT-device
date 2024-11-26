import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Graph = ({ data, title }) => {
  // Prepare the chart data
  const chartData = {
    labels: data.map((point) => point.timestamp), // X-axis: timestamps
    datasets: [
      {
        label: title, // Graph title
        data: data.map((point) => point.value), // Y-axis: values
        borderColor: 'rgba(75,192,192,1)', // Line color
        borderWidth: 2, // Line thickness
        tension: 0.3, // Smooth curve
      },
    ],
  };

  // Chart options for responsiveness and proper scaling
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to resize dynamically
    plugins: {
      legend: {
        display: true, // Display the legend
        position: 'top', // Legend position
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true, // Skip some labels to prevent overlap
          maxRotation: 45, // Rotate labels for better readability
          minRotation: 0,
        },
        title: {
          display: true,
          text: 'Timestamp', // Label for the x-axis
        },
      },
      y: {
        beginAtZero: true, // Start y-axis at 0
        title: {
          display: true,
          text: 'Value', // Label for the y-axis
        },
      },
    },
  };

  return (
    <div style={{ height: '400px', width: '100%' }}> {/* Constrain height and width */}
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Graph;
