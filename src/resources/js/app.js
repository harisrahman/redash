import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import TopNav from './dashboard/TopNav';
import TopNavItem from './dashboard/TopNavItem';
import SideNav from './dashboard/SideNav';
import SideNavItem from './dashboard/SideNavItem';
import SideNavSubMenu from './dashboard/SideNavSubMenu';
import SideNavSubItem from './dashboard/SideNavSubItem';
import Logout from './dashboard/Logout';
import DashboardDash from './pages/DashboardDash';
import UsersAll from './pages/UsersAll';
import AccountSettings from './pages/AccountSettings';

function App()
{
	const topNavMenu = (
		<TopNav>
			<Logout />

		</TopNav>
	);

	const sideNavMenu = (
		<SideNav>
			<SideNavItem url="/dashboard" icon="fa fa-tachometer-alt" title="Dashboard" left="-2px" />
			<SideNavItem icon="far fa-building" title="Users">
				<SideNavSubMenu url="#" icon="far fa-building" title="Users">
					<SideNavSubItem url="/users/all" title="All" />
				</SideNavSubMenu>
			</SideNavItem>
			<SideNavItem url="/account-settings" icon="fas fa-cog" title="Account Settings" />
		</SideNav>
	);

	return (

		<BrowserRouter>
			<Dashboard topNav={topNavMenu} sideNav={sideNavMenu}>
				<Route path={"/dashboard"} component={DashboardDash}></Route>
				<Route path={"/users/all"} component={UsersAll}></Route>
				<Route path={"/account-settings"} component={AccountSettings}></Route>
			</Dashboard>
		</BrowserRouter>
	);
}

export default App;
