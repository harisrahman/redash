import React, { useState, useContext } from 'react';
import { FormContext } from '../Contexts';
import Input from './Input';

function NumInput(props)
{
	const [num, setNum] = useState(props.val || "");
	const [isInvalid, setAsInvalid] = useState(false);
	const [fbMsg, setFbMsg] = useState("");
	const { formState, setFormState } = useContext(FormContext);

	const numInputHandler = e =>
	{
		const changedValue = e.target.value.replace(/[^0-9]+/g, '');
		let invalid;
		setNum(changedValue);

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
	};
	const numBlurHandler = e =>
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
		<Input {...props} val={num} changeHandler={numInputHandler} blurHandler={numBlurHandler} invalid={isInvalid} fb={fbMsg} />
	);
}

export default NumInput;