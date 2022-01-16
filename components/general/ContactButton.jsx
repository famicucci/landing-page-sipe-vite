import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const ContactButton = () => {
	return (
		<button className="flex items-center justify-center bg-red-500 font-bold mx-auto py-2 px-4 text-white w-fit hover:bg-red-700 transition duration-150 ease-in shadow-lg rounded-3xl">
			<span className="mr-1">Contactar</span>
			<span>
				<AiOutlineWhatsApp />
			</span>
		</button>
	);
};

export default ContactButton;
