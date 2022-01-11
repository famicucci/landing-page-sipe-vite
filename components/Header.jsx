import React from 'react';
import { BsFillRecordCircleFill } from 'react-icons/Bs';

const Header = (props) => {
	return (
		<div className="flex justify-between items-center p-4 bg-grey">
			<div className="flex items-center">
				<span className="text-blue mr-1">
					<BsFillRecordCircleFill className="text-xl" />
				</span>
				<h3 className="text-2xl text-blue font-semibold">Sip-e</h3>
			</div>
			<h4>Exclusivo - Sistema de Gestión Online</h4>
		</div>
	);
};

export default Header;
