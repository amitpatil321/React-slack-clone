import React from 'react';
import { Alert } from 'antd';
import PropTypes from 'prop-types'

/*
 - Component to print alert boxes
 - Usase : <Alert type="error" message={errorText} />
 - Params:
    - title -> Alert title
    - message -> Alert description
    - type -> Alert type, possible values : info, success, warning, error
 */

const AlertBox = ({title, message, type}) => {
    let alertTitle = title ? title : type;
    return (
            <div className="mainContent" id="mainContent">
                <Alert
                    message     = {alertTitle.substring(0, 1).toUpperCase() + alertTitle.substring(1)}
                    description = {message}
                    type        = {type}
                    showIcon
                />
            </div>
    );
}

AlertBox.propType = {
    title         : PropTypes.string,
    message       : PropTypes.string.isRequired,
    type          : PropTypes.string.isRequired
}

export default AlertBox;