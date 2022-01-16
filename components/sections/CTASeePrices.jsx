import React from 'react';
import captura from '../../src/captura1.5-excel.jpg';
import { ImArrowDown2 } from 'react-icons/im';

const CTASeePrices = () => {
	return (
		<section className="py-10 px-2">
			<h3 className="text-3xl  font-semibold text-center mb-4">
				¿Qué estás esperando?
			</h3>
			<p className="text-2xl  font-semibold text-center w-1/2 mx-auto">
				No más Excel en tu gestión diaria
			</p>
			<div className="w-3/4 overflow-hidden rounded-2xl shadow-lg bg-red-500 mx-auto my-4">
				<img src={captura} className="w-full" alt="ejemplo excel" />
			</div>
			<p className="text-2xl  font-semibold text-center w-1/2 mx-auto mb-4">
				Solo como herramienta de apoyo
			</p>
			<button className="flex items-center justify-center bg-red-500 font-bold mx-auto py-2 w-2/3 text-white hover:bg-red-700 transition duration-150 ease-in shadow-lg rounded-3xl">
				<span>
					<ImArrowDown2 />
				</span>
				<span className="ml-2">¡Quiero ver precios!</span>
			</button>
		</section>
	);
};

export default CTASeePrices;
