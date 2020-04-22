import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function MainContent(props)
{
	return (
		<main className="content-wrapper">
			<div className="container-fluid">
				{props.children}
			</div>
		</main>
	);
}


export default MainContent;