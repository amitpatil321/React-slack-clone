import React from 'react';
import { Menu, Icon } from 'antd';
import { PropTypes } from 'prop-types';

const HeaderOptions = ({ options, showChannelInfoDrawer }) => (
  <Menu mode="horizontal" selectedKeys={['']} style={{ width: '100px' }}>
    <Menu.Item key="setting:0" onClick={showChannelInfoDrawer}>
      <Icon type="info-circle" style={{ color: '#1890ff', fontSize: 18 }} />
    </Menu.Item>
    {options}
  </Menu>
);

HeaderOptions.propTypes = {
  options: PropTypes.object.isRequired,
  showChannelInfoDrawer: PropTypes.func.isRequired,
};

export default HeaderOptions;
