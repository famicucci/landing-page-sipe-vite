import React from 'react';
import captura from '../src/captura-sipe.jpg';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Main = (props) => {
	return (
		<div className="flex flex-col justify-center h-fit bg-gray-100 p-2">
			<div className="flex mb-5">
				<div className="w-1/2">
					<h4 className="text-2xl font-semibold text-gray-500">
						Como empezar a administrar tu negocio
						<span className="ml-1 text-blue-500">sin inversión inicial</span>
					</h4>
				</div>
				<picture className="w-1/2 overflow-hidden  rounded-2xl shadow-lg">
					<img
						src={captura}
						alt="logo"
						className="w-full h-full object-right"
					/>
				</picture>
			</div>
			<h4 className="text-xl font-semibold text-gray-500 text-center mb-2">
				Descúbrenos
			</h4>
			<button className="flex items-center justify-center bg-blue-500 font-bold mx-auto py-2 px-4 text-white w-fit hover:bg-blue-700 transition duration-150 ease-in shadow-lg rounded-3xl">
				<span className="mr-1">Contactar</span>
				<span>
					<AiOutlineWhatsApp />
				</span>
			</button>
		</div>
	);
};

export default Main;
