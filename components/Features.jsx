import React from 'react';
import { FaKey } from 'react-icons/fa';

const FeatureToLeft = (props) => {
	const { icon, title, text } = props;

	return (
		<div className="flex text-white mt-14 content-center">
			<div className="flex flex-col p-4 text-3xl">
				<span className="mx-auto">{icon}</span>
				<h3 className="mt-2 font-bold">{title}</h3>
			</div>
			<p className="p-2 text-left text-xl">{text}</p>
		</div>
	);
};

const FeatureToRight = (props) => {
	const { icon, title, text } = props;

	return (
		<div className="flex text-white mt-14">
			<p className="p-2 text-left text-xl">{text}</p>
			<div className="flex flex-col content-center p-4 text-3xl">
				<span className="mx-auto">{icon}</span>
				<h3 className="mt-2 font-bold">{title}</h3>
			</div>
		</div>
	);
};

const Features = () => {
	return (
		<section className="w-full bg-blue-500 rounded-t-2xl">
			<h3 className="text-3xl text-white font-semibold text-center pt-10">
				¿Porqué usar Sip-e?
			</h3>
			<FeatureToLeft
				icon={<FaKey />}
				title="Asistencia"
				text="Recibirás ayuda profesional para ordenar tu gestión y ponerlo en marcha"
			/>
			<FeatureToRight
				icon={<FaKey />}
				title="Productividad"
				text="Ahorrarás tiempo 
                y evitarás errores"
			/>
			<FeatureToLeft
				icon={<FaKey />}
				title={'Multi\xa0Stock'}
				text="Recibirás ayuda profesional para ordenar tu gestión y ponerlo en marcha"
			/>
		</section>
	);
};

export default Features;
