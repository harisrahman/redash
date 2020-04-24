import React, { useEffect, useState } from 'react';

function Expire(props)
{
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() =>
	{
		console.log("hi");

		setTimer(props.delay);

		// returned function will be called on component unmount 
		return () =>
		{
			setIsVisible(true);
		}
	}, []);


	const setTimer = (delay) =>
	{
		setTimeout(() => setIsVisible(false), delay);
	};

	return (
		isVisible
			? <div>{props.children}</div>
			: <span />
	);
}

export default Expire;