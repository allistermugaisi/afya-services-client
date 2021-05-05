import React from 'react';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		marginLeft: 5,
	},
};

const SpinnerAdornment = withStyles(styles)((props) => (
	<CircularProgress className={props.classes.spinner} size={15} />
));

const AdornedButton = (props) => {
	const { children, loading, ...rest } = props;
	return (
		<Button {...rest}>
			{loading && <SpinnerAdornment {...rest} />}
			&nbsp;
			{children}
		</Button>
	);
};

export default AdornedButton;
