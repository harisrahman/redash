import React, { useState } from 'react';
import styled from 'styled-components';

function Input(props)
{
	const [inputType, setinputType] = useState(props.type ? props.type : "text");

	const showPassBtnClickHandler = e =>
	{
		if (inputType === "password")
			setinputType("text");
		else
			setinputType("password");
	};

	return (
		<div className="form-group">
			<label>{props.title}</label>
			<TextInput type={inputType} className={"form-control" + (props.invalid ? " is-invalid" : "")} name={props.name} placeholder={props.placeholder ? props.placeholder : props.title} value={props.val} minLength={props.min} maxLength={props.max} onChange={props.changeHandler} onBlur={props.blurHandler} />
			{
				props.type === "password" &&
				props.showShowPassBtn &&
				<ShowPassBtn type="button" role="button" aria-label="Show Password" title="Show Password" tabindex="-1" aria-pressed="false"><i className={"fas fa-eye" + (inputType === "password" ? "-slash" : "")} onClick={showPassBtnClickHandler}></i></ShowPassBtn>
			}
			{
				props.helpText &&
				<small className="form-text text-muted">
					{props.helpText}
				</small>
			}
			{
				props.invalid &&
				<div className="invalid-feedback">
					{props.fb}
				</div>
			}
		</div>
	);
}

const TextInput = styled.input`
	position: relative;

	&[type='email']
	{
		text-transform: lowercase;
		&::placeholder
		{
			text-transform: none;
		}
	}

`;

const ShowPassBtn = styled.button`
	display: none;
	position: absolute;
	right: 3%;
	top: 42%;
    border: none;
	background-color: transparent;
	color: #595959;
    padding: 0;
    margin: 0;
	font-size: 1.3em;

	:focus
	{
		outline: none;
	}

	${TextInput}:not(.is-invalid):not(:placeholder-shown) + & {
		display: block;
	}
`;

export default Input;