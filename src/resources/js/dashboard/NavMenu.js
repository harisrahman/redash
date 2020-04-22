import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import SideNavToggler from './SideNavToggler';

function NavMenu(props)
{
	return (
		<Root className='navbar navbar-expand-lg navbar-dark fixed-top' id="mainNav">
			<a className='navbar-brand' href="dashboard">
				<img src="img/brand-logo.png" alt="Brand Logo" width="163" height="36" />
			</a>
			<button className='navbar-toggler navbar-toggler-right' type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id="navbarResponsive">
				{props.top}
				{props.side}
				<SideNavToggler />
			</div>
		</Root>
	);
}

const Root = styled.nav`
    background-color: #2B3466;
`;

export default NavMenu;