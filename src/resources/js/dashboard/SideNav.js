import React from 'react';
import styled from 'styled-components';

function SideNav(props)
{
	return (
		<Root className='navbar-nav navbar-sidenav' id="sideNav">
			{props.children}
		</Root>
	);
}

const Root = styled.ul`
`;

export default SideNav;