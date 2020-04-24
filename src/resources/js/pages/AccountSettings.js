import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LoaderView, loadContent } from '../components/Loader';
import { FormContext } from '../Contexts';
import Alert from '../components/Alert';
import NameInput from '../components/NameInput';
import EmailInput from '../components/EmailInput';
import NumInput from '../components/NumInput';
import PassInput from '../components/PassInput';
import Card from '../components/Card';
import Form from '../components/Form';
import Expire from '../components/Expire';
import { setObjValue } from '../scripts/helpers';

function AccountSettings(props)
{
	const [isLoading, setIsLoading] = useState(true);
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
			}
		}
	});

	const [submitState, setSubmitState] = useState(false);

	const setFormStateHandler = (propertyPath, value) => 
	{
		let currState = formState;

		setObjValue(propertyPath, value, currState);
		setFormState(currState);
	}

	const setSubmitStateHandler = (msg) => 
	{
		setSubmitState(msg);
	}

	useEffect(() =>
	{
		loadContent("api/account-setting/account-details")
			.then(function (response)
			{
				setFormStateHandler("AccountDetailsSetting.full_name.value", response.name);
				setFormStateHandler("AccountDetailsSetting.email.value", response.email);
				setFormStateHandler("AccountDetailsSetting.mobile.value", response.mobile);

				setIsLoading(false);
			});

	}, []);

	return (

		<div>
			{
				isLoading ?
					<LoaderView />
					: (
						<Root>
							{submitState &&
								<Expire delay="2000">
									<Alert type={submitState} size="col-md-10" />
								</Expire>
							}
							<Card title="Account Details" icon="fas fa-user-circle" size="col-md-10">
								<FormContext.Provider value={{ formState, setFormState }}>
									<Form method="patch" url="/api/account-setting/account-details" context="AccountDetailsSetting" alert={setSubmitStateHandler}>
										<div className="row">
											<div className="col-12">
												<NameInput title="Full Name" name="full_name" min="5" max="50" val={formState.AccountDetailsSetting.full_name.value} context="AccountDetailsSetting" />
											</div>
											<div className="col-12">
												<EmailInput title="Email" name="email" helpText="This email can be used to log in." val={formState.AccountDetailsSetting.email.value} context="AccountDetailsSetting" />
											</div>
											<div className="col-12">
												<NumInput title="Mobile Number" name="mobile" min="10" max="10" helpText="This mobile number can be used to log in." val={formState.AccountDetailsSetting.mobile.value} context="AccountDetailsSetting" />
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
					)
			}
		</div>
	);

}

const Root = styled.div`
`;

export default AccountSettings;