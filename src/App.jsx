import { useState } from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="flex flex-col justify-center h-screen bg-blue">
				<h1 className="text-3xl font-bold text-white mb-2">Sip-e</h1>
				<h4 className=" font-bold text-white">
					La forma sencilla de gestionar tu negocio
				</h4>
				<button className="rounded-md bg-orange-500 font-bold mx-auto mt-4 py-2 px-4 text-white w-fit">
					Contactar
				</button>
			</div>
		</div>
	);
}

export default App;
