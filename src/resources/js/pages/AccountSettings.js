import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LoaderView, LoadContent } from '../helpers/Loader';
import { FormContext } from '../Contexts';
import Alert from '../components/Alert';
import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import NumInput from '../components/NumInput';
import PassInput from '../components/PassInput';
import Card from '../components/Card';
import Form from '../components/Form';

function AccountSettings(props)
{
	const [view, setView] = useState(null);
	const [formState, setFormState] = useState({
		AccountDetailsSetting: {
			full_name: {
				value: "",
				invalid: false,
			},
			email: {
				value: "",
				invalid: false,
			},
			mobile: {
				value: "",
				invalid: false,
			},
		}
	});

	useEffect(() =>
	{
		alert("f");
	}, []);

	return (
		<Root>
			<Alert type="S" size="col-md-10" />

			<Card title="Account Details" icon="fas fa-user-circle" size="col-md-10">
				<FormContext.Provider value={{ formState, setFormState }}>
					<Form method="patch" url="/account-setting/save" context="AccountDetailsSetting">
						<div className="row">
							<div className="col-12">
								<NameInput title="Full Name" name="full_name" min="5" max="50" val="kx" context="AccountDetailsSetting" />
							</div>
							<div className="col-12">
								<EmailInput title="Email" name="email" helpText="This email can be used to log in." context="AccountDetailsSetting" />
							</div>
							<div className="col-12">
								<NumInput title="Mobile Number" name="mobile" min="10" max="10" helpText="This mobile number can be used to log in." context="AccountDetailsSetting" />
							</div>
							<div className="col-12 mt-2 text-center">
								<button type="submit" className="btn_1 medium">Update</button>
							</div>
						</div>
					</Form>
				</FormContext.Provider>
			</Card>

			<Card title="Change Password" icon="fas fa-key" size="col-md-10">
				<div className="row">
					<div className="col-12">
						<PassInput title="Current Password" name="current_password" min="8" max="50" />
					</div>
					<div className="col-12">
						<PassInput title="New Password" name="new_password" min="8" max="50" />
					</div>
					<div className="col-12">
						<PassInput title="Confirm New Password" name="confirm_new_password" min="8" max="50" />
					</div>
					<div className="col-12 mt-2 text-center">
						<button type="submit" className="btn_1 medium">Update</button>
					</div>
				</div>
			</Card>

		</Root>
	);
}

const Root = styled.div`
`;

export default AccountSettings;