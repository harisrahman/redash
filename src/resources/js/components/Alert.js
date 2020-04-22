import React from 'react';

function Alert(props)
{
	const msg = props.msg
				? props.msg
				: (
					props.type === "S"
					? (<span><strong>Success!</strong> Changes saved.</span>)
					: (<span><strong>Error!</strong> Changes could not be saved.</span>)
				);

	return (
		<div className="row justify-content-center">
			<div className={props.size}>
				<div className={"alert alert-dismissible fade show alert-" + (props.type === "S" ? "success" : "danger")} role="alert">
					{msg}
					<button type="button" className="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Alert;