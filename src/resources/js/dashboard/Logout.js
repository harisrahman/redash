import React from 'react';
import TopNavItem from '../dashboard/TopNavItem';

function logoutHandler(e)
{
	e.preventDefault();
	document.getElementById('logout-form').submit();
}

function Logout(props)
{
	return (
		<TopNavItem url="#" icon="fas fa-sign-out-alt" title="Logout" clickHandler={logoutHandler}>
			<form id="logout-form" action="logout" method="POST" style={{ display: 'none' }}>
				<input type="hidden" name="_token" value={csrf_token} />
			</form>
		</TopNavItem >
	);
}

export default Logout;