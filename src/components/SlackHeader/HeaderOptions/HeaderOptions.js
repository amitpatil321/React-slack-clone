import React, {useContext} from 'react'
import { Menu, Icon } from 'antd';

import { SlackContext } from 'store/store';

export default function HeaderOptions({options}) {
    let context = useContext(SlackContext);

    return (
        <Menu mode="horizontal" selectedKeys={['']} style={{width: "100px"}}>
            <Menu.Item key="setting:0" onClick={context.showDrawer}>
                <Icon type="info-circle" style={{ color: "#1890ff", fontSize : 18 }}/>
            </Menu.Item>
            {options}
        </Menu>
    )
}
