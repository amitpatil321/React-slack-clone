import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout} from 'antd';

import Sidebar from '../../containers/Sidebar';

const {
    Header, Content, Footer, Sider,
} = Layout;

const ChatHome = ({user, rooms}) =>
    <Layout>
        <Sider className="sidebar">
            <Sidebar
                user  = {user}
                room  = {room}
                rooms = {rooms}
                />
        </Sider>
        <Layout>
            <Header className="header" >
                Header
            </Header>
            <Content className="content">
                content
            </Content>
            <Footer className="footer">
                Footer
            </Footer>
        </Layout>
    </Layout>

// ChatHome.prototype = {
// }

export default ChatHome