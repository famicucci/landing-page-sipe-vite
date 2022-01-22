import React from 'react';
// import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="w-full bg-blue-500 py-14">
			<div className="mb-10">
				<p className="text-xl text-white text-center mb-3">
					Perfil Profesional
				</p>
				<a
					href="https://www.linkedin.com/in/francisco-agustin-micucci/"
					target="_blank"
				>
					{/* <AiFillLinkedin className="text-6xl text-white mx-auto" /> */}
				</a>
			</div>
			<div className="text-sm text-center">
				<p className="inline mr-2">@ {year}</p>
				<a
					className="text-white"
					href="http://www.franciscomicucci.com/"
					target="_blank"
				>
					franciscomicucci.com
				</a>
				<p>Todos los derechos reservados</p>
			</div>
		</footer>
	);
};

export default Footer;
