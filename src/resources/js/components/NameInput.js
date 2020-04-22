import React, { useState, useContext } from 'react';
import { FormContext } from '../Contexts';
import Input from './Input';

function NameInput(props)
{
	const [name, setName] = useState(props.val || "");
	const [isInvalid, setAsInvalid] = useState(false);
	const [fbMsg, setFbMsg] = useState("");
	const { formState, setFormState } = useContext(FormContext);

	const nameInputHandler = e => 
	{
		const changedValue = e.target.value.replace(/[^A-Za-z\s.]+/g, '');
		let invalid;

		setName(changedValue);

		if (changedValue.length >= props.min)
		{
			setAsInvalid(false);
			setFbMsg("");
			invalid = false;
		}
		else
		{
			invalid = true;
		}

		setFormState({ ...formState, [props.context]: { ...formState[props.context], [e.target.name]: { value: changedValue, invalid: invalid } } });

	}

	const nameBlurHandler = e =>
	{
		const length = e.target.value.length;

		if (length < props.min)
		{
			setAsInvalid(true);

			let msg = props.title + " must be of atleast " + props.min + " characters in length.";

			if (length === 0)
			{
				msg = "Please fill in your " + props.title.toLowerCase() + ".";
			}

			setFbMsg(msg);
		}
	}

	return (
		<Input {...props} val={name} changeHandler={nameInputHandler} blurHandler={nameBlurHandler} invalid={isInvalid} fb={fbMsg} />
	);
}

export default NameInput;