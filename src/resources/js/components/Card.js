import React from 'react';

function Card(props)
{
	return (
			<div className="row justify-content-center">
				<div className={props.size}>
					<div className="box_general padding_bottom">
						<div className="header_box version_2">
							<h2><i className={props.icon}></i>{props.title}</h2>
						</div>
						{props.children}
					</div>
				</div>
			</div>
	);
}

export default Card;