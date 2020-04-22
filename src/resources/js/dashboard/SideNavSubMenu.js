import React from 'react';
import styled from 'styled-components';

function SideNavSubMenu(props)
{
	return (
		<Root className='sidenav-second-level collapse' id={props.title + "CollapseLocation"}>
			{props.children}
		</Root>
	);
}

const Root = styled.ul`
`;

export default SideNavSubMenu;