import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function Footer(props) {
	return (
		<footer className={`sticky-footer`}>
			<div className={`container`}>
				<div className={`text-center`}>
					<small>Copyright © {props.brand} {props.year}</small>
				</div>
			</div>
		</footer>
	);
}


export default Footer;