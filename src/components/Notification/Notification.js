import { notification } from 'antd';
import PropTypes from 'prop-types';

const Notification = (type = 'success', title = '', desc = '') => {
  notification[type]({
    message: title,
    description: desc,
  });
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Notification;
