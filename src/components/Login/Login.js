import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';

const Login = ({ onSuccess, onFailure, error }) => (
  <>
    {error}
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
    />
  </>
);

Login.propTypes = {
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
};

Login.defaultProps = {
  onSuccess: () => {},
  onFailure: () => { },
};

export default Login;
