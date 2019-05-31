import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Typography, Spin, Icon } from 'antd';
import ContentLoader from 'react-content-loader'

import { Consumer } from '../../store/store';
import Sidebar from '../../containers/Sidebar';
import SlackHeader from '../SlackHeader';
import ListMessages from '../../containers/Contents/ListMessages';
const {
    Header, Content, Footer, Sider,
} = Layout;
const { Title } = Typography;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const ChatHome = ({ messages }) =>
    <Consumer>
        {(context) => {
            let { user, room, rooms } = context.state;
            if (Object.keys(user).length && room !== null && rooms.length)
                return (
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
                )
            return (
                <Layout>
                    <Sider className="sidebar">
                        <ContentLoader
                            height={160}
                            width={400}
                            speed={2}
                            primaryColor={'#f3f3f3'}
                            secondaryColor={'#888'}
                        >
                            <rect x="122" y="33" rx="4" ry="4" width="187" height="18" />
                            <circle cx="72" cy="47" r="35" />
                        </ContentLoader>

                        <ContentLoader
                            height={340}
                            width={400}
                            speed={2}
                            primaryColor={'#f3f3f3'}
                            secondaryColor={'#888'}
                        >
                            <rect x="25" y="14" rx="4" ry="4" width="187" height="26" />
                            <rect x="25" y="70" rx="4" ry="4" width="267" height="26" />
                            <rect x="25" y="127" rx="4" ry="4" width="267" height="26" />
                            <rect x="25" y="187" rx="4" ry="4" width="267" height="26" />
                            <rect x="25" y="247" rx="4" ry="4" width="267" height="26" />
                        </ContentLoader>

                        <ContentLoader
                            height={100}
                            width={400}
                            speed={2}
                            primaryColor="#f3f3f3"
                            secondaryColor="#888"
                        >
                            <rect x="25" y="15" rx="4" ry="4" width="250" height="26" />
                        </ContentLoader>

                        <ContentLoader
                            height={340}
                            width={400}
                            speed={2}
                            primaryColor={'#f3f3f3'}
                            secondaryColor={'#888'}
                        >
                            <rect x="25" y="14" rx="4" ry="4" width="187" height="26" />
                            <rect x="25" y="70" rx="4" ry="4" width="267" height="26" />
                            <rect x="25" y="127" rx="4" ry="4" width="267" height="26" />
                            <rect x="25" y="187" rx="4" ry="4" width="267" height="26" />
                            <rect x="25" y="247" rx="4" ry="4" width="267" height="26" />
                        </ContentLoader>
                    </Sider>
                    <Layout>
                        <Header className="header" >
                            <ContentLoader
                                height={30}
                                width={400}
                                speed={2}
                                primaryColor="#f3f3f3"
                                secondaryColor="#888"
                            >
                                <rect x="0" y="8" rx="4" ry="4" width="20" height="4" />
                                <rect x="22" y="8" rx="4" ry="4" width="8" height="4" />
                                <rect x="98%" y="8" rx="4" ry="4" width="5" height="4" />
                            </ContentLoader>
                        </Header>
                        <Content className="content">
                            <div className="screen-center text-center">
                                <Title level={3}>Thanks you for using Slack Clone. We appreciate it!</Title>
                                <p className="text-light">- Your friends at slack Clone</p>
                                <Spin indicator={antIcon} />
                            </div>
                        </Content>
                        <Footer className="footer">
                            Footer
                        </Footer>
                    </Layout>
                </Layout>
            )
        }}
    </Consumer>

// ChatHome.propType = {
//     user : PropTypes.object.isRequired,
//     rooms: PropTypes.array.isRequired,
//     room : PropTypes.object
// }

export default ChatHome