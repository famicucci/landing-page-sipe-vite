import { useState } from 'react';
import './App.css';
import captura from './captura-sipe.jpg';

function App() {
	return (
		<div className="flex flex-col justify-center h-fit bg-blue p-2">
			<h1 className="text-3xl text-center font-bold text-white mb-2">Sip-e</h1>
			<h4 className=" font-bold text-white text-center mb-3">
				La forma sencilla de gestionar tu negocio
			</h4>
			<img src={captura} alt="logo" />
			<button className="rounded-md bg-orange-500 font-bold mx-auto mt-4 py-2 px-4 text-white w-fit">
				Contactar
			</button>
		</div>
	);
}

export default App;
