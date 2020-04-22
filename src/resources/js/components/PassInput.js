import React, { useState } from 'react';
import Input from './Input';

function PassInput(props)
{
	const [pass, setPass] = useState(props.val || "");
	const [isInvalid, setAsInvalid] = useState(false);
	const [fbMsg, setFbMsg] = useState("");

	const PassInputHandler = e =>
	{
		setPass(e.target.value)
		const length = e.target.value.length;

		if (length > props.min)
		{
			setAsInvalid(false);
			setFbMsg("");
		}
	};
	const passBlurHandler = e =>
	{
		const length = e.target.value.length;

		if (length < props.min)
		{
			setAsInvalid(true);

			let msg = "Password must be of atleast " + props.min + " characters in length.";

			if (length === 0)
			{
				msg = "Please fill in your password."
			}

			setFbMsg(msg);
		}
	}

	return (
		<Input {...props} type="password" val={pass} changeHandler={PassInputHandler} blurHandler={passBlurHandler} invalid={isInvalid} fb={fbMsg} showShowPassBtn={true} />
	);
}

export default PassInput;