import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import MainContent from './MainContent';
import Footer from './Footer';

function Dashboard(props)
{
	return (
		<Root>
			<NavMenu side={props.sideNav} top={props.topNav}></NavMenu>

			<MainContent>
				{props.children}
			</MainContent>

			<Footer>
			</Footer>
		</Root>
	);
}

const Root = styled.div`
	min-height: 100vh;
`;

export default Dashboard;