import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import './leaflet.css';
import './styles.css';


interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  MapContainer: {
    center: number;
};
  countryInfo: {
    lat: number;
    long: number;
  };
}


function CovidMap() {
  const [data, setData] = useState<CountryData[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/countries')
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

  if (data.length === 0) {
    return <p>Loading MAP...</p>;
  }

  return (
    <MapContainer center={[0,0]} zoom={4} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((country) => (
        <Marker key={country.country} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} position={[country.countryInfo.lat, country.countryInfo.long]}>
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>Total Cases: {country.cases}</p>
              <p>Total Deaths: {country.deaths}</p>
              <p>Total Recovered: {country.recovered}</p>
              <p>Total Active Cases: {country.active}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default CovidMap;
