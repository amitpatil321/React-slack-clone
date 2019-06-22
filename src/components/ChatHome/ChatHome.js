import React, { lazy, Suspense } from 'react';
import { Layout, Typography, Spin, Icon, Alert } from 'antd';
import ContentLoader from 'react-content-loader';
import { Offline } from 'react-detect-offline';

import Sidebar from 'containers/Sidebar';
import ListMessages from 'containers/Contents/ListMessages';
import SlackHeader from 'containers/SlackHeader/SlackHeaderContainer';
import SendMessage from 'containers/Footer/SendMessage';
import * as CONFIG from 'config';

const AddChannelModal = lazy(() => import('containers/Sidebar/AddChannel'));
const ListChannelsModal = lazy(() => import('containers/Sidebar/ListChannels'));

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const ChatHome = props => {
	let {
		user,
		room,
		rooms,
		isLoading,
		error
	} = props;

	if (Object.keys(user).length && room && rooms.length)
		return (
			<>
				<Layout>
					<Sider className="sidebar">
						<Sidebar />
					</Sider>
					<Layout>
						<Header className="header">
							<SlackHeader />
						</Header>
						<Content className="content">
							{error && <Alert message={error} type="error" />}
							{/* handle internet offline event */}
							<Offline>
								<Alert
									message="Your computer seems to be offline. We’ll keep trying to reconnect."
									type="warning"
								/>
							</Offline>
							{isLoading.show && (
								<div className="screen-center text-center">
									<Spin indicator={antIcon} tip={isLoading.message} />
								</div>
							)}
							<ListMessages />
						</Content>
						<Footer className="footer">
							<SendMessage />
						</Footer>
					</Layout>
				</Layout>
				<Suspense fallback={''}>
					<ListChannelsModal />
					<AddChannelModal />
				</Suspense>
			</>
		);
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
				<Header className="header">
					<ContentLoader
						height={30}
						width={400}
						speed={2}
						primaryColor="#f3f3f3"
						secondaryColor="#888"
					>
						<rect x="0" y="8" rx="3" ry="3" width="30" height="3" />
						<circle cx="35" cy="10" r="3" />

						<circle cx="93%" cy="10" r="3" />
						<circle cx="97%" cy="10" r="3" />
					</ContentLoader>
				</Header>
				<Content className="content">
					<div className="screen-center text-center">
						<Title level={3}>
							Thanks you for using {CONFIG.APP_NAME}. We appreciate it!
						</Title>
						<p className="text-light">- Your friends at {CONFIG.APP_NAME}</p>
						<Spin indicator={antIcon} />
					</div>
				</Content>
				<Footer className="footer"></Footer>
			</Layout>
		</Layout>
	);
};

// ChatHome.propType = {
//     user : PropTypes.object.isRequired,
//     rooms: PropTypes.array.isRequired,
//     room : PropTypes.object
// }

export default ChatHome;
