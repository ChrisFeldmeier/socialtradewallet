import { Line } from "react-chartjs-2";
import { useMemo } from "react";
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

type TimeRange = "1D" | "1W" | "1M" | "1Y";

interface ChartProps {
  timeRange: TimeRange;
}

// Generiere die Daten einmalig außerhalb der Komponente
const generateInitialData = () => {
  const basePrice = 45000;
  const data = {
    "1D": {
      labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      data: Array.from({ length: 24 }, (_, i) => basePrice + Math.sin(i / 4) * 1000)
    },
    "1W": {
      labels: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      data: Array.from({ length: 7 }, (_, i) => basePrice + Math.sin(i / 2) * 2000)
    },
    "1M": {
      labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      data: Array.from({ length: 30 }, (_, i) => basePrice + Math.sin(i / 8) * 5000)
    },
    "1Y": {
      labels: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      data: Array.from({ length: 12 }, (_, i) => basePrice + Math.sin(i / 3) * 10000)
    }
  };
  return data;
};

const initialData = generateInitialData();

export default function Chart({ timeRange }: ChartProps) {
  const data = useMemo(() => ({
    labels: initialData[timeRange].labels,
    datasets: [
      {
        label: "Portfolio Wert",
        data: initialData[timeRange].data,
        fill: true,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  }), [timeRange]);

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
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(context.parsed.y);
            }
            return label;
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
            return new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(value);
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
  };

  return <Line data={data} options={options} />;
} 