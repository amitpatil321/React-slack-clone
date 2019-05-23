import React from 'react'
import { Avatar, Tooltip, Button, Icon } from 'antd'
import GoogleLogout from 'react-google-login';
import PropTypes from 'prop-types'

const UserPicName = ({ user, onLogoutSuccess}) => {
    return (
        <div className="logged-user">
            <Avatar src={user.imageUrl}></Avatar>
            <span>{user.name}</span>
            <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onLogoutSuccess={onLogoutSuccess}
                render={renderProps => (
                    <Tooltip placement="bottom" title="Logout" trigger="hover">
                        <Button type="link" onClick={renderProps.onClick} className="float-right">
                            <Icon type="poweroff" />
                        </Button>
                    </Tooltip>
                )}
            >
            </GoogleLogout>
        </div>
    )
}

UserPicName.propTypes = {
    user : PropTypes.object.isRequired,
    onLogoutSuccess : PropTypes.func.isRequired
}

export default UserPicName