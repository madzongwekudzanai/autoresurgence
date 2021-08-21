import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/auth';
import Spinner from './Spinner';

const Success = ({ auth, authenticateUser, match }) => {
	useEffect(() => {
		authenticateUser(match.params.token);
		localStorage.setItem('token', match.params.token);
	}, [authenticateUser]);
	return (
		<Fragment>
			{(() => {
				if ((auth.loading === false) & (auth.user !== null)) {
					return <Redirect to="/" />;
				} else {
					return <Spinner />;
				}
			})()}
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

Success.propTypes = {
	auth: PropTypes.object.isRequired,
	authenticateUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
	authenticateUser,
})(Success);
