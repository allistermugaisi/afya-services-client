import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import logo from '../../images/main-logo.jpeg';
import AdornedButton from '../../utils/AdornedButton';
import Input from '../../utils/useInput';
import './Login.css';

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);

	const {
		register,
		handleSubmit,
		setFocus,
		formState: { errors },
	} = useForm({
		mode: 'all',
		shouldUnregister: true,
		shouldFocusError: true,
	});

	const onSubmit = (data, e) => {
		e.preventDefault();
		setButtonLoading(true);
		console.log(data);
	};

	const handleShowPassword = () =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	React.useEffect(() => {
		setFocus('login_id');
	}, [setFocus]);

	return (
		<Container>
			<div className="signin-container">
				<div className="signin-welcome">
					<div className="img">
						<img className="responsive-img" src={logo} alt="logo" />
					</div>
				</div>

				<div className="signin-section">
					<h1 className="login-title">Sign in</h1>
					<h4 className="sign-title">Enter your details below</h4>
					<form onSubmit={handleSubmit(onSubmit)} className="login-form">
						<div className="textField-container">
							<TextField
								{...register('login_id', {
									required: 'Member id is required!',
									shouldFocus: true,
								})}
								name="login_id"
								type="number"
								variant="outlined"
								label="Member id"
								margin="normal"
								autoComplete="off"
								fullWidth
								error={errors?.login_id ? true : false}
								helperText={errors?.login_id?.message}
							/>

							<Input
								{...register('password', {
									required: 'Password is required!',
									minLength: {
										value: 8,
										message: 'Password should be atleast 8 characters',
									},
								})}
								name="password"
								type={showPassword ? 'text' : 'password'}
								label="Password"
								margin="normal"
								handleShowPassword={handleShowPassword}
								autoComplete="off"
								error={errors?.password ? true : false}
								helperText={errors?.password?.message}
							/>

							<AdornedButton
								fullWidth
								disableElevation
								size="large"
								type="submit"
								color="primary"
								style={{ marginTop: '1rem' }}
								disabled={buttonLoading ? true : false}
								loading={buttonLoading}
								variant="contained"
							>
								Login
							</AdornedButton>
						</div>
						<div>
							<p className="register-link">
								Don't have an account? &nbsp;
								<Link className="register-info" to="/register">
									Get started
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default Login;
