import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryCases from './CovidMap';
import CasesGraph from './CasesGraph';

interface CovidData {
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}

function Dashboard() {
  const [data, setData] = useState<CovidData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/all')
      .then((response) => {
        setData(response.data);
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
      <h1>Global COVID-19 Data</h1>
      <p>Total Cases: {data.cases}</p>
      <p>Total Deaths: {data.deaths}</p>
      <p>Total Recovered: {data.recovered}</p>
      <h2 className=''>Country Specific</h2>
      <div className="content-center ...">
      <CountryCases />  
      </div>
    </div>
  );
}

export default Dashboard;
