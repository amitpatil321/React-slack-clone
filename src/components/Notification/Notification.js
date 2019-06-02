import { notification } from 'antd';

const Notification = (type = "success", title = "", desc = "" ) => {
    notification[type]({
        message: title,
        description: desc
    });
};

export default Notification;