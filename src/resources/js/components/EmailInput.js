import React, { useState, useContext } from 'react';
import { FormContext } from '../Contexts';
import Input from './Input';

function EmailInput(props)
{
	const [email, setEmail] = useState(props.val || "");
	const [isInvalid, setAsInvalid] = useState(false);
	const [fbMsg, setFbMsg] = useState("");
	const { formState, setFormState } = useContext(FormContext);

	const regexForValidEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

	const emailInputHandler = e =>
	{
		const value = e.target.value;
		setEmail(value.toLowerCase());
		let invalid;

		if (isInvalid && value.match(regexForValidEmail))
		{
			setAsInvalid(false);
			setFbMsg("");
			invalid = false;
		}
		else
		{
			invalid = true;
		}

		setFormState({ ...formState, [props.context]: { ...formState[props.context], [e.target.name]: { value: value, invalid: invalid } } });
	}

	const emailBlurHandler = e =>
	{
		const value = e.target.value;
		let msg = "";

		if (!value.match(regexForValidEmail))
		{
			setAsInvalid(true);
			msg = "Please enter a valid email.";
		}

		if (value.length === 0)
		{
			msg = "Please fill in your email.";
		}

		setFbMsg(msg);
	}

	return (
		<Input {...props} type="email" val={email} changeHandler={emailInputHandler} blurHandler={emailBlurHandler} invalid={isInvalid} fb={fbMsg} />
	);
}

export default EmailInput;