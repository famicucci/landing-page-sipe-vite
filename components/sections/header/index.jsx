import React from 'react';
// import { BsFillRecordCircleFill } from 'react-icons/Bs';

const Header = () => {
	return (
		<div className="flex flex-col items-center p-9">
			<div className="flex items-center mb-2">
				<span className="text-blue-500 mr-1">
					{/* <BsFillRecordCircleFill className="text-xl" /> */}
				</span>
				<h3 className="text-3xl text-blue-500 font-semibold">Sip-e</h3>
			</div>
			<p className="text-lg text-gray-500 font-semibold">
				Sistema de Gestión Online
			</p>
		</div>
	);
};

export default Header;
