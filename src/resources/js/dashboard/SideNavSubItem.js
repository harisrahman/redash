import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function SideNavSubItem(props)
{
	return (

		<Root>
			<NavLink activeClassName="active" to={props.url}>{props.title}</NavLink>
		</Root>

	);
}

const Root = styled.li`
`;

export default SideNavSubItem;