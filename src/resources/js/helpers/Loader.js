export const LoaderView = (url) =>
{
	return (
		<div>
			Loader
		</div>
	);
}

export const LoadPage = (url) =>
{
	if (url)
	{
		// Make a request for a user with a given ID
		axios.get(url)
			.then(function (response)
			{
				return response;
			})
			.catch(function (error)
			{
				console.log(error);
			})
			.finally(function ()
			{
				console.log(error);
			});
	}
}
