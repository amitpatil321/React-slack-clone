import React from 'react';
import { Alert } from 'antd';

/*
 - Component to print alert boxes
 - Usase : <Alert type="error" message={errorText} />
 - Params:
    - title -> Alert title
    - message -> Alert description
    - type -> Alert type, possible values : info, success, warning, error
 */

const AlertBox = (props) => {
    let title = props.title ? props.title : props.type;
    return (
            <div className="mainContent" id="mainContent">
                <Alert
                    message     = {title.substring(0,1).toUpperCase() + title.substring(1)}
                    description = {props.message}
                    type        = {props.type}
                    showIcon
                />
            </div>
    );
}

export default AlertBox;