import React from 'react'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default function HeaderOptions({options}) {
    return (
        <Menu mode="horizontal" selectedKeys={['']}>
            {options}
        </Menu>
    )
}
