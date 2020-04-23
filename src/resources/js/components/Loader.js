import React from 'react';

export const LoaderView = () =>
{
	return (
		<div className="full-page-height d-flex align-items-center justify-content-center">
			<div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}

export const loadContent = (url) =>
{
	if (url)
	{
		return new Promise(function (resolve, reject)
		{
			// Make a request for a user with a given ID
			axios.get(url)
				.then(function (response)
				{
					resolve(response.data);
				})
				.catch(function (error)
				{
					console.log(error);
					reject(error);
				});
		});
	}
}
