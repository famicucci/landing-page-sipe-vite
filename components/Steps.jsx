import React from 'react';

const OneStep = (props) => {
	const { icon, text, directionReverse } = props;

	const content = (
		<>
			<div className="px-10 text-3xl">
				<span className="text-5xl font-bold">{icon}</span>
			</div>
			<p className="p-2 text-left text-2xl text-gray-500 font-semibold">
				{text}
			</p>
		</>
	);

	return !directionReverse ? (
		<div className="flex flex-row justify-center items-center text-blue-500 mt-14 px-10">
			{content}
		</div>
	) : (
		<div className="flex flex-row-reverse justify-center items-center text-blue-500 mt-14 px-10">
			{content}
		</div>
	);
};

const Steps = () => {
	return (
		<section>
			<div className="w-full bg-blue-500 p-4 rounded-t-xl">
				<p className="text-white text-xl text-center">
					Recibirás asistencia en estos pasos hasta tener el sistema funcionando
				</p>
			</div>
			<div className="bg-white py-10 px-2">
				<h3 className="text-3xl text-gray-500 text-center mb-4">
					Pasos a seguir
				</h3>
				<OneStep
					icon="1"
					text="Generar códigos para los productos"
					directionReverse={false}
				/>
				<OneStep
					icon="2"
					text="Crear una base de datos de productos"
					directionReverse={true}
				/>
				<OneStep
					icon="3"
					text="Costear y calcular precios en una sola planilla"
					directionReverse={false}
				/>
				<OneStep
					icon="4"
					text="Cargar la información al sistema"
					directionReverse={true}
				/>
				<p className="text-blue-500 font-bold text-3xl text-center my-12">
					¡Y listo! Comienza a usar Sip-e
				</p>
			</div>
		</section>
	);
};

export default Steps;
