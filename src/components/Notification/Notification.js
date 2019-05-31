import { notification } from 'antd';

export default Notification = (type = "success", title = "", desc = "" ) => {
    notification[type]({
        message: title,
        description: desc
    });
};
