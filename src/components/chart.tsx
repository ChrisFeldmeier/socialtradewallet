"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartProps {
  timeRange?: "1D" | "1W" | "1M" | "1Y";
}

export function Chart({ timeRange = "1M" }: ChartProps) {
  // Generate dummy data based on time range
  const generateData = () => {
    const points = timeRange === "1D" ? 24 : timeRange === "1W" ? 7 : timeRange === "1M" ? 30 : 12;
    const data = [];
    let value = 10000;
    
    for (let i = 0; i < points; i++) {
      const change = (Math.random() - 0.4) * 500;
      value += change;
      data.push(value);
    }
    
    return data;
  };

  const labels = {
    "1D": Array.from({ length: 24 }, (_, i) => `${i}:00`),
    "1W": ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    "1M": Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    "1Y": ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
  };

  const data = {
    labels: labels[timeRange],
    datasets: [
      {
        label: "Portfolio Wert",
        data: generateData(),
        fill: true,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        pointRadius: 0,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
        callbacks: {
          label: (context: any) => {
            return `${context.parsed.y.toLocaleString()} €`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          callback: (value: any) => {
            return `${value.toLocaleString()} €`;
          },
        },
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: false,
    },
  };

  return (
    <Line data={data} options={options} />
  );
} 