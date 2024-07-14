"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { DashboardLayout } from "@/components/Layout";
import { format } from "date-fns";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [state, setState] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Solana Price ",
        data: [],
        fill: true,
        backgroundColor: "#8881FB",
        borderColor: "#8881FB",
        borderWidth: 2,
        pointRadius: 2,
        pointBackgroundColor: "#8A82FE",
        tension: 0.3,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=30"
        );
        const priceData = response.data.prices;

        const labels = priceData.map((item) =>
          new Date(item[0]).toLocaleDateString()
        );
        const prices = priceData.map((item) => item[1]);

        setChartData({
          labels,
          datasets: [
            {
              ...chartData.datasets[0],
              data: prices,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching Solana price data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#8881FB", // Legend text color
          font: {
            size: 14, // Legend text size
          },
        },
      },
      title: {
        display: true,
        text: "Solana Price Trend (Last 30 Days)",
        color: "black", // Title text color
        font: {
          size: 18, // Title text size
          weight: "bold", // Title text weight
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgb(100, 100, 100)", // X-axis ticks color
          font: {
            size: 12, // X-axis ticks size
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // X-axis grid color
        },
      },
      y: {
        ticks: {
          color: "rgb(100, 100, 100)", // Y-axis ticks color
          font: {
            size: 12, // Y-axis ticks size
          },
          callback: (value) => `$${value}`, // Format Y-axis ticks as currency
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Y-axis grid color
        },
      },
    },
  };

  return (
    <DashboardLayout>
      <Line data={chartData} options={options} />
    </DashboardLayout>
  );
};

export default Dashboard;
