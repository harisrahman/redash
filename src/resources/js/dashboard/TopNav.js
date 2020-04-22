import React from 'react';
import styled from 'styled-components';

function TopNav(props)
{
	return (
		<Root className='navbar-nav ml-auto'>
			{props.children}
		</Root>
	);
}

const Root = styled.ul`
`;

export default TopNav;