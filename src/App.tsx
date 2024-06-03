import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ContactForm from "./Components/Contactform";
import ChartsMaps from "./Components/Chartsmaps";
import Dashboard from "./Components/Dashboard";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();
function App() {

	return (
    <>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'black',
					padding: '5px 0 5px 5px',
					fontSize: '20px'
				}}>
					<div style={{ margin: '10px' }}>
						<NavLink to="./Contactform" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Contacts
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/Chartsmaps" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							ChartsMaps
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/Dashboard" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Dashboard
						</NavLink>
					</div>
				</div>
				<h1 className="bg-black text-white text-4xl text-center">Welcome to Covid database!!</h1>
				<Routes>
					<Route  path="/Contactform" element={<ContactForm />} />
          			<Route path="/Chartsmaps" element={<ChartsMaps />} />
					<Route  path="/Dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
