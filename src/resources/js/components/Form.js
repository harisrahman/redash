import React, { useContext } from 'react';
import axios from 'axios';
import { FormContext } from '../Contexts';

function Form(props)
{
	const { formState, setFormState } = useContext(FormContext);

	const submitHandler = e =>
	{
		e.preventDefault();

		const contextData = formState[props.context];
		let data = {};
		let invalid = false;

		Object.keys(contextData).forEach((key) =>
		{
			if (contextData[key].invalid)
			{
				invalid = true;
			}
			data[key] = contextData[key].value;
		});

		if (invalid) return false;

		if (props.method)
		{
			data["_method"] = props.method;
		}

		axios.post(props.url, data)
			.then(function (response)
			{
				if (response.data == "S" || response.data == "F")
				{
					console.log("DSK");
					props.alert(response.data);
				}
				console.log(response);
			})
			.catch(function (error)
			{
				console.log(error);
			});

	};

	return (
		<form onSubmit={submitHandler}>
			{props.children}
		</form>
	);
}

export default Form;