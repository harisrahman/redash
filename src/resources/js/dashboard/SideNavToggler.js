import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function toggleSideNav(e)
{
	e.preventDefault();
	$("body").toggleClass("sidenav-toggled");
	$(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
	$(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");

	localStorage.setItem('sidenavToggled', $("body").hasClass("sidenav-toggled"));
}

function SideNavToggler(props)
{
	const [toggle, setToggle] = useState(false);

	useEffect(() => {

		let sidenavToggled = localStorage.getItem("sidenavToggled");
		let sidenavToggledInHTML = $("body").hasClass("sidenav-toggled");

		if (sidenavToggled !== null)
		{
			if (sidenavToggled == "true" && !sidenavToggledInHTML)
				$("body").addClass("sidenav-toggled");
			else if (sidenavToggled == "false" && sidenavToggledInHTML)
				$("body").removeClass("sidenav-toggled");
		}

	});

	return (
		<Root className='navbar-nav sidenav-toggler'>
			<li className='nav-item'>
				<a className='nav-link text-center' id="sidenavToggler" onClick={toggleSideNav}>
					<i className='fa fa-fw fa-angle-left dashIcons'></i>
				</a>
			</li>
		</Root> 
	);
}

const Root = styled.ul`
`;

export default SideNavToggler;