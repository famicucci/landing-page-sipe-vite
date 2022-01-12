import React from 'react';
import captura from '../src/captura-sipe-recorte.jpg';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const CTASection = () => {
	return (
		<div className="flex flex-col justify-center h-fit bg-gray-100 p-2 pb-8">
			<div className="mb-5 mr-[-12px]">
				<div className="float-left w-5/12 h-[200px]">
					<p className="text-2xl font-semibold text-gray-500 pr-3">
						Como empezar a administrar tu negocio
						<span className="ml-1 text-blue-500">sin inversión inicial</span>
					</p>
				</div>
				<picture className="float-right overflow-hidden rounded-l-2xl shadow-lg w-7/12 h-[265px] mt-8">
					<img src={captura} alt="logo" className="w-full" />
				</picture>
			</div>
			<h4 className="text-xl font-semibold text-gray-500 text-center mb-2">
				Descúbrenos
			</h4>
			<button className="flex items-center justify-center bg-red-500 font-bold mx-auto py-2 px-4 text-white w-fit hover:bg-red-700 transition duration-150 ease-in shadow-lg rounded-3xl">
				<span className="mr-1">Contactar</span>
				<span>
					<AiOutlineWhatsApp />
				</span>
			</button>
		</div>
	);
};

export default CTASection;
