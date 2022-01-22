import React from 'react';
// import { AiFillCheckSquare } from 'react-icons/ai';
import ContactButton from '../../general/ContactButton';

const ListItem = (props) => {
	const { text } = props;

	return (
		<li className="flex items-center mb-6">
			{/* <AiFillCheckSquare className="text-2xl text-lime-500" /> */}
			<p className="ml-2 text-xl text-gray-500">{text}</p>
		</li>
	);
};

const Prices = () => {
	return (
		<section className="py-14 px-4">
			<h3 className="text-3xl text-gray-500 text-center mb-14">
				Posibilidades ilimitadas
			</h3>
			<p className="text-xl text-gray-500 text-left px-8">
				Tendrás la posibilidad de gestionar tu negocio sin inversion inicial ni
				costos extras
			</p>
			<div className="my-10">
				<div className="w-4/5 bg-white p-6 rounded-2xl mx-auto shadow-xl border-solid border-blue-500">
					<p className="text-xl text-gray-500 border-b border-gray-100 pb-6">
						A partir de <span className="font-bold">$ 6.500/mes</span>
					</p>
					<p className="text-xl text-left mt-2 font-bold text-lime-500 py-5">
						Lo que obtienes:
					</p>
					<ul>
						<ListItem text="Asesoría Profesional" />
						<ListItem text="Módulo de Stock" />
						<ListItem text="Módulo de Ventas" />
						<ListItem text="Módulo de Gastos" />
						<ListItem text="Reportes" />
					</ul>
					<ContactButton />
				</div>
				<p className="text-xs text-center mt-2">
					*El precio final puede estar sujeto a variaciones
				</p>
			</div>
		</section>
	);
};

export default Prices;
