import React from 'react';
import PropTypes from 'prop-types';
import { Layout} from 'antd';

import Sidebar from '../../containers/Sidebar';
import SlackHeader from '../SlackHeader';
import ListMessages from '../../containers/Contents/ListMessages';
const {
    Header, Content, Footer, Sider,
} = Layout;

const ChatHome = ({ messages }) =>
    <Layout>
        <Sider className="sidebar">
            <Sidebar />
        </Sider>
        <Layout>
            <Header className="header" >
                <SlackHeader />
            </Header>
            <Content className="content">
                <ListMessages messages={messages} />
            </Content>
            <Footer className="footer">
                Footer
            </Footer>
        </Layout>
    </Layout>

// ChatHome.propType = {
//     user : PropTypes.object.isRequired,
//     rooms: PropTypes.array.isRequired,
//     room : PropTypes.object
// }

export default ChatHome