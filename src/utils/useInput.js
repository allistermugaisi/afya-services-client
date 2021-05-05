import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function Input(props) {
	const {
		half,
		type,
		name,
		label,
		value,
		error = null,
		onChange,
		helperText,
		autoFocus,
		inputRef,
		handleShowPassword,
		...other
	} = props;
	return (
		<TextField
			name={name}
			type={type}
			variant="outlined"
			fullWidth
			autoFocus={autoFocus}
			label={label}
			onChange={onChange}
			inputRef={inputRef}
			InputProps={
				(name === 'password' && {
					endAdornment: (
						<InputAdornment position="start">
							<IconButton onClick={handleShowPassword}>
								{type === 'password' ? (
									<VisibilityOff fontSize="small" />
								) : (
									<Visibility fontSize="small" />
								)}
							</IconButton>
						</InputAdornment>
					),
				}) ||
				(name === 'password_confirmation' && {
					endAdornment: (
						<InputAdornment position="start">
							<IconButton onClick={handleShowPassword}>
								{name === 'password_confirmation' && type === 'password' ? (
									<Visibility fontSize="small" />
								) : (
									<VisibilityOff fontSize="small" />
								)}
							</IconButton>
						</InputAdornment>
					),
				})
			}
			{...other}
			{...(error && { error: true, helperText })}
		/>
	);
}
