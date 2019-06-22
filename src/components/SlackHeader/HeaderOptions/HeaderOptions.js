import React from 'react'
import { Menu, Icon } from 'antd';

export default function HeaderOptions({ options, showChannelInfoDrawer}) {

	return (
		<Menu mode="horizontal" selectedKeys={['']} style={{width: "100px"}}>
			<Menu.Item key="setting:0" onClick={showChannelInfoDrawer}>
				<Icon type="info-circle" style={{ color: "#1890ff", fontSize : 18 }}/>
			</Menu.Item>
			{options}
		</Menu>
	)
}
