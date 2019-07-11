import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import * as CONFIG from 'config';
import Login from 'components/Login';
import Alert from 'components/Alert';

export default class LoginContainer extends Component {
    state = {
      loginSuccess: false,
      error: null,
    }

    // Handle google login success response
  _onSuccess = (googleResponse) => {
    console.log(googleResponse);
    const { profileObj } = googleResponse;
    if (profileObj) {
      const self = this;
      axios.post(`${CONFIG.SERVER}/user`, profileObj)
        .then((response) => {
          localStorage.setItem('slack', JSON.stringify(googleResponse.profileObj));
          self.setState({ loginSuccess: true });
        })
        .catch((error) => {
          // throw error
          self.setState({
            error: <Alert type="error" title="error" message="Failed to create user!, Please try again." />,
          });
        });
    }
  }

    _onFailure = (err) => {
      console.log(err);
      this.setState({
        error: <Alert type="error" title="error" message="Failed to create user!, Please try again." />,
      });
    }

    render() {
      console.log(CONFIG);
      const { loginSuccess, error } = this.state;
      if (loginSuccess) { return <Redirect to="/" />; }
      return (
        <Login error={error} onSuccess={this._onSuccess} onFailure={this._onFailure} />
      );
    }
}
