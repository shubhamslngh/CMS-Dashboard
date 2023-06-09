import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import axios from 'axios';
import { Chart, CategoryScale, LinearScale, PointElement, LineController, LineElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineController, LineElement);


interface HistoricalData {
  cases: Record<string, number>;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

function CasesGraph() {
  const [data, setData] = useState<ChartData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get<HistoricalData>('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
      .then((response) => {
        const historicalData = response.data;
        const casesData = historicalData.cases;

        const chartData: ChartData = {
          labels: Object.keys(casesData),
          datasets: [
            {
              label: 'COVID-19 Cases',
              data: Object.values(casesData),
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        };

        setData(chartData);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>COVID-19 Cases Fluctuation</h2>
      <Line data={data} />
    </div>
  );
}

export default CasesGraph;
