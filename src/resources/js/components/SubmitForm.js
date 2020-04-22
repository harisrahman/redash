import React, { useState } from 'react';
import Input from './Input';

function NumInput(props)
{
	const [num, setNum] = useState(props.val || "");
	const [isInvalid, setAsInvalid] = useState(false);
	const [fbMsg, setFbMsg] = useState();

	const numInputHandler = e => setNum(e.target.value.replace(/[^0-9]+/g, ''));
	const numBlurHandler = e =>
	{
		const length = e.target.value.length;

		if (length < props.min)
		{
			setAsInvalid(true);
			setFbMsg(props.title + " must be of atleast " + props.min + " characters in length.");
		}
		else
		{
			setAsInvalid(false);
			setFbMsg("");
		}
	}

	return (
		<Input {...props} val={num} changeHandler={numInputHandler} blurHandler={numBlurHandler} invalid={isInvalid} fb={fbMsg} />
	);
}

export default NumInput;