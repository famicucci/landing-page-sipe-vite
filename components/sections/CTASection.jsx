import React from 'react';
import captura from '../../src/captura-sipe-recorte.jpg';
import ContactButton from '../general/ContactButton';

const CTASection = () => {
	return (
		<section className="flex flex-col justify-center h-fit p-2 pb-10">
			<div className="mb-5 mr-[-8px]">
				<div className="float-left w-5/12 h-[200px]">
					<p className="text-2xl font-semibold text-gray-500 pr-3">
						{'Como\xa0empezar a\xa0administrar tu negocio'}
					</p>
					<p className="text-2xl font-semibold text-blue-500">
						sin inversión inicial
					</p>
				</div>
				<picture className="float-right overflow-hidden rounded-l-2xl shadow-lg w-7/12 h-[265px] mt-8">
					<img src={captura} alt="logo" className="w-full" />
				</picture>
			</div>
			<h4 className="text-xl font-semibold text-gray-500 text-center mb-2">
				Descúbrenos
			</h4>
			<ContactButton />
		</section>
	);
};

export default CTASection;
