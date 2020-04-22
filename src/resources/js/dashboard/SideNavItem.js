import React from 'react';
import styled from 'styled-components';
import SideNavSubItem from './SideNavSubItem';
import { NavLink } from 'react-router-dom';

function SideNavItem(props)
{
	const innerElements = (
		<div className='row d-flex align-items-center'>
			<div className='col-2 col-sm-1 col-lg-3'>
				<i className={props.icon + " dashIcons"} style={{ marginLeft: props.left }}></i>
			</div>
			<div className='col-10 col-sm-11 col-lg-9'>
				<span className='nav-link-text'>{props.title}</span>
			</div>
		</div>
	);


	return (
		<Root className='nav-item' data-toggle="tooltip" data-placement="right" title={props.title}>
			{
				props.children
					? <a className="nav-link nav-link-collapse collapsed" href={"#" + props.title + "CollapseLocation"} data-toggle="collapse" data-parent="#sideNav">{innerElements}</a>
					: <NavLink to={props.url} activeClassName="active" className="nav-link">{innerElements}</NavLink>
			}
			{props.children}
		</Root>
	);
}

const Root = styled.li`
`;

export default SideNavItem;