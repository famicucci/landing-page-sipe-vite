import React from 'react';
import captura from '../src/captura-sipe.jpg';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Main = (props) => {
	return (
		<div className="flex flex-col justify-center h-fit bg-blue p-2">
			<img src={captura} alt="logo" />
			<button className="flex items-center justify-center rounded-md bg-orange-500 font-bold mx-auto mt-4 py-2 px-4 text-white w-fit hover:bg-orange-600 transition duration-150 ease-in">
				<span className="mr-1">Contactar</span>
				<span>
					<AiOutlineWhatsApp />
				</span>
			</button>
		</div>
	);
};

export default Main;
