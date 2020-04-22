import React from 'react';
import styled from 'styled-components';

function TopNavItem(props)
{
	return (
		<Root className='nav-item'>
			<a className='nav-link' href={props.url} onClick={props.clickHandler}>
				<i className={props.icon}></i>{props.title}
			</a>
			{props.children}
		</Root>
	);
}

const Root = styled.li`
`;

export default TopNavItem;