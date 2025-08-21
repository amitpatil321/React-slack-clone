<p align="center"><h1 align="center">REACT SLACK CLONE</h1></p>
<p align="center">
	<em>Empower Collaboration with React-slack-clone: Where Real-time Chat Meets Seamless Integration!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/amitpatil321/React-slack-clone?style=plastic&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/amitpatil321/React-slack-clone?style=plastic&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/amitpatil321/React-slack-clone?style=plastic&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/amitpatil321/React-slack-clone?style=plastic&color=0080ff" alt="repo-language-count">
</p>
<p align="center">Built with the tools and technologies:</p>
<p align="center">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=plastic&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=plastic&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=plastic&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=plastic&logo=JavaScript&logoColor=black" alt="JavaScript">
</p>
<br>

## Notice
This app was using Pusher chatbit as a realtime chat backend, But since [pusher has taken down chatkit service](https://www.cometchat.com/blog/pusher-chatkit-is-shutting-down), this code doesnt work anymore. 
If you want you can migrate app to comet chat, by [following steps here](https://www.cometchat.com/blog/pusher-chatkit-is-shutting-down). 


## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The React-slack-clone project is a real-time chat application that replicates the functionality of Slack. It enables seamless communication between users through features like user authentication, role assignment, and room management. Targeting developers and teams, it leverages Pusher Chatkit server and Express for a reliable chat experience.

---

## 👾 Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>React-based frontend with Express backend for server-side logic</li><li>Real-time chat functionality using Pusher Chatkit server</li><li>Client-server communication via REST APIs</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Consistent coding style and conventions</li><li>Proper error handling and logging</li><li>Use of modern JavaScript features</li></ul> |
| 📄 | **Documentation** | <ul><li>Extensive documentation in JavaScript, JSON, CSS, and HTML</li><li>Clear instructions for installation, usage, and testing</li><li>Well-documented codebase for easy understanding and maintenance</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integration with Pusher Chatkit server for real-time chat functionality</li><li>Utilization of Express for server-side logic</li><li>Integration of various npm packages for enhanced features</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Modular components for easy maintenance and scalability</li><li>Separation of concerns between frontend and backend functionalities</li><li>Reusable code snippets for efficient development</li></ul> |
| 🧪 | **Testing**       | <ul><li>Comprehensive testing suite using npm test</li><li>Unit tests for individual components and integration tests for end-to-end functionality</li><li>Ensuring code reliability and robustness through testing</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized frontend rendering for fast user interactions</li><li>Efficient server-side processing for real-time chat updates</li><li>Performance monitoring and optimization for smooth user experience</li></ul> |
| 🛡️ | **Security**      | <ul><li>Secure user authentication and role assignment mechanisms</li><li>Data encryption for sensitive information transmission</li><li>Protection against common web vulnerabilities</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Essential dependencies such as Pusher Chatkit server, Express, body-parser, and cors</li><li>Version consistency maintained through package-lock.json</li><li>Proper management of npm packages for project stability</li></ul> |

---

## 📁 Project Structure

```sh
└── React-slack-clone/
    ├── README.md
    ├── client
    │   ├── .bablerc
    │   ├── .gitignore
    │   ├── README.md
    │   ├── build
    │   ├── jsconfig.json
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   └── src
    ├── package-lock.json
    ├── package.json
    ├── server.js
    ├── slack.png
    └── slack2.png
```


### 📂 Project Index
<details open>
	<summary><b><code>REACT-SLACK-CLONE/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The code file provided in the package-lock.json within the project structure is essential for managing dependencies and ensuring version consistency in the overall codebase architecture<br>- It plays a crucial role in specifying the required dependencies, such as "@pusher/chatkit-server" version 1.3.0, and locking them to prevent unintended updates<br>- This file acts as a cornerstone for maintaining a stable and reliable project by accurately defining the dependencies needed for the application to function correctly.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/package.json'>package.json</a></b></td>
				<td>- Facilitates real-time chat functionality using Pusher Chatkit server, Express, and other dependencies<br>- Handles server-side logic for the chat application, enabling seamless communication between users<br>- The file defines essential configurations and dependencies for the project, ensuring smooth operation of the chat feature within the overall architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/server.js'>server.js</a></b></td>
				<td>- Implements a server using Express to handle user authentication and role assignment in a chat application<br>- It utilizes Chatkit for managing users and rooms, serving static files from a React app, and authenticating users<br>- The server listens on a specified port for incoming requests.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- client Submodule -->
		<summary><b>client</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `client/package-lock.json` file in the project structure is crucial for managing dependencies in the Slack2 project<br>- It ensures that the correct versions of dependencies, such as "@ant-design/colors", are locked in place to maintain stability and consistency across the codebase<br>- This file plays a key role in guaranteeing that the project can be built and run reliably by resolving and securing the necessary dependencies.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/jsconfig.json'>jsconfig.json</a></b></td>
				<td>Defines project's base URL and path mappings for source files in the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/.bablerc'>.bablerc</a></b></td>
				<td>- Enables hot reloading for React components in the client-side codebase by configuring the Babel plugin 'react-hot-loader'<br>- This setup enhances the development experience by automatically refreshing the UI when code changes are made, improving productivity and facilitating rapid iteration during frontend development.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/package.json'>package.json</a></b></td>
				<td>- Manages dependencies and scripts for the React-based Slack2 client, facilitating development, testing, and deployment<br>- Key dependencies include React, Redux, Axios, and Ant Design<br>- Scripts for starting, building, testing, and deploying the application are defined<br>- Additionally, it includes configurations for ESLint and Browserslist.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/index.css'>index.css</a></b></td>
						<td>- Define global styling for the project, ensuring consistent typography and font rendering across the application<br>- The code in the provided file sets the base styles for the body and code elements, enhancing readability and visual appeal.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/App.css'>App.css</a></b></td>
						<td>Define consistent styling for the project's layout and components, ensuring a cohesive user interface experience.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/serviceWorker.js'>serviceWorker.js</a></b></td>
						<td>- Enables service worker registration for offline capabilities and faster subsequent visits in production<br>- Handles updating cached resources in the background and provides callbacks for update and success scenarios<br>- Supports checking for valid service worker existence and unregistering if needed.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/Chatkit.js'>Chatkit.js</a></b></td>
						<td>- Facilitates real-time chat functionality by connecting users to Chatkit service, handling room subscriptions, and managing user interactions<br>- Utilizes Chatkit SDK and Ant Design for notifications<br>- Implements event handlers for room updates, user presence, and typing indicators<br>- Handles errors gracefully with user-friendly notifications and local storage management.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/config.js'>config.js</a></b></td>
						<td>- Define global constants for the Slack Clone project, including the app name, server URL, group message duration, and emoji codes<br>- These constants are crucial for maintaining consistency and ease of configuration across the codebase.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/setupTests.js'>setupTests.js</a></b></td>
						<td>Enables configuration of Enzyme for React component testing in the client-side codebase.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/App.js'>App.js</a></b></td>
						<td>- Defines routing for the React application using React Router, connecting components to specific paths<br>- Integrates Redux state management and hot module reloading.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/index.js'>index.js</a></b></td>
						<td>- Render the main application component using Redux store for state management, enhancing the app's functionality<br>- Integrate React components with the store to provide a seamless user experience<br>- Optimize app performance by enabling offline capabilities through service workers.</td>
					</tr>
					</table>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<details>
								<summary><b>Notification</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Notification/Notification.js'>Notification.js</a></b></td>
										<td>- Defines a reusable notification component for displaying messages in the application<br>- The component takes parameters for type, title, and description to customize the notification appearance<br>- It integrates with the 'antd' library for consistent UI feedback across the project.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Notification/index.js'>index.js</a></b></td>
										<td>Exports the Notification component from the client/src/components/Notification directory, facilitating easy access and integration of notifications within the project architecture.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>SlackHeader</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/SlackHeader.css'>SlackHeader.css</a></b></td>
										<td>- Define styling for SlackHeader component, including room title and settings menu<br>- Set font size and weight for room title, adjust menu layout and styling for a clean interface.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/SlackHeader.js'>SlackHeader.js</a></b></td>
										<td>- Enhances Slack interface by displaying room details and user information dynamically<br>- Determines room type and user status to render appropriate header content<br>- Supports both channel and private chat headers, adapting based on the context<br>- Integrates with user data and room settings for a personalized user experience.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/index.js'>index.js</a></b></td>
										<td>- Exports the SlackHeader component from the client/src/components/SlackHeader/index.js file<br>- This component plays a crucial role in the project's frontend architecture, contributing to the user interface and overall user experience.</td>
									</tr>
									</table>
									<details>
										<summary><b>HeaderOptions</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/HeaderOptions/HeaderOptions.js'>HeaderOptions.js</a></b></td>
												<td>Expose a React component for Slack header options, facilitating channel information display and user interaction.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/HeaderOptions/index.js'>index.js</a></b></td>
												<td>Expose HeaderOptions component for SlackHeader to enhance user interaction and navigation within the project's frontend architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>RemovePeople</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/RemovePeople/RemovePeople.js'>RemovePeople.js</a></b></td>
												<td>- Implements a modal component for removing users from a Slack room<br>- Displays a selection dropdown of existing room users, allowing multiple selections for removal<br>- Handles user interactions for removing selected users and closing the modal.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/RemovePeople/index.js'>index.js</a></b></td>
												<td>Facilitates removing people from Slack channels by exporting the 'RemovePeople' component.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>DeleteChannelConfirm</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/DeleteChannelConfirm/DeleteChannelConfirm.js'>DeleteChannelConfirm.js</a></b></td>
												<td>- Implements a modal component for confirming channel deletion in the SlackHeader section<br>- Displays a confirmation message with the channel name and an option to delete<br>- Provides visual cues and actions for users to confirm or cancel the deletion process.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/DeleteChannelConfirm/index.js'>index.js</a></b></td>
												<td>Enables exporting of the DeleteChannelConfirm component from the SlackHeader directory.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>AddPeople</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/AddPeople/index.js'>index.js</a></b></td>
												<td>Enables exporting the 'AddPeople' component from the SlackHeader module to facilitate adding new members to a Slack channel.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/SlackHeader/AddPeople/AddPeople.js'>AddPeople.js</a></b></td>
												<td>- Facilitates adding people to a Slack room<br>- Displays a modal to select users from a list, with options for submission and closure<br>- Ensures a seamless user experience by providing a user-friendly interface for managing room members.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>ChatHome</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/ChatHome/ChatHome.test_.js'>ChatHome.test_.js</a></b></td>
										<td>- Verifies rendering and structure of ChatHome component with Sidebar, Header, Content, and Footer sections<br>- Tests presence of Sidebar component with user data and room details<br>- Ensures proper integration and display within the overall chat application layout.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/ChatHome/index.js'>index.js</a></b></td>
										<td>Exports the ChatHome component from the client/src/components/ChatHome directory, facilitating seamless integration of the chat functionality within the project architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/ChatHome/ChatHome.js'>ChatHome.js</a></b></td>
										<td>- ChatHome component renders the main chat interface, handling user and room data to display messages and manage channels<br>- It dynamically adjusts UI based on data availability, showing loaders when needed<br>- It also includes offline handling and modals for adding channels<br>- This component plays a crucial role in providing a seamless chat experience within the application.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Alert</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Alert/Alert.test.js'>Alert.test.js</a></b></td>
										<td>- Tests the rendering and functionality of the Alert component by verifying correct display of title, message, and icon based on different alert types<br>- Also ensures that the component defaults to displaying the correct title if not provided.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Alert/Alert.js'>Alert.js</a></b></td>
										<td>- Generates alert boxes with customizable titles, messages, and types for displaying notifications in the UI<br>- The component enhances user experience by providing visual feedback for different scenarios such as errors, warnings, successes, or information messages<br>- It encapsulates the logic for rendering alerts in a structured manner, contributing to a more user-friendly interface.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Alert/index.js'>index.js</a></b></td>
										<td>Expose Alert component for use in the client-side architecture.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Content</b></summary>
								<blockquote>
									<details>
										<summary><b>ListMessages</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Content/ListMessages/ListMessages.css'>ListMessages.css</a></b></td>
												<td>- Define consistent styling for message components in the content list to ensure a clean and structured display<br>- Set specific padding, font sizes, colors, and hover effects for message senders, text, and grouped messages<br>- Maintain readability and visual hierarchy for a user-friendly interface.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Content/ListMessages/ListMessages.js'>ListMessages.js</a></b></td>
												<td>- Render a component to display messages in a chat room, allowing grouping by sender within a specified time frame<br>- Shows sender's name, avatar, message text, and timestamp<br>- Supports linking URLs in messages<br>- Key props include room details, grouping preference, and message data<br>- Enhances user experience in managing and viewing chat conversations.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Content/ListMessages/index.js'>index.js</a></b></td>
												<td>Expose ListMessages component for displaying a list of messages in the content section of the project.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Content/ListMessages/ListMessages.test.js'>ListMessages.test.js</a></b></td>
												<td>Tests the rendering and functionality of the ListMessages component by mounting it with mock data and checking if it renders correctly, displays the message, sender name, and time accurately.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>Sidebar</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/Sidebar.test.js'>Sidebar.test.js</a></b></td>
										<td>- Manages rendering of sidebar components, including rooms, channels, and user lists<br>- Ensures correct display of unread messages, user statuses, and triggers relevant actions like logout and channel selection<br>- Implements logic for styling channel names with unread messages and filtering private chat users<br>- Maintains consistency between displayed and expected user data.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/index.js'>index.js</a></b></td>
										<td>Enables the export of the Sidebar component from the client/src/components/Sidebar/index.js file, contributing to the project's architecture by providing a reusable and modular UI element.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/Sidebar.js'>Sidebar.js</a></b></td>
										<td>- The Sidebar component renders a user's profile, channels, and direct messages in a dark-themed menu<br>- It displays user avatars, names, and presence status, allowing for easy channel selection and logout functionality<br>- The component efficiently organizes and presents chat-related information for a seamless user experience within the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/mockData.js'>mockData.js</a></b></td>
										<td>- The `mockData.js` file in the `client/src/components/Sidebar` directory provides static data for rooms in the project<br>- It includes details such as room names, creation dates, user IDs, and unread message counts<br>- This data is used to simulate room information and populate the sidebar component with sample room data.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/Sidebar.css'>Sidebar.css</a></b></td>
										<td>- Define the styling for the user interface elements in the sidebar component, such as user details, room lists, and channel groups<br>- Set specific visual properties like padding, colors, font weights, and margins to enhance the overall appearance and user experience of the application.</td>
									</tr>
									</table>
									<details>
										<summary><b>AddChannel</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/AddChannel/index.js'>index.js</a></b></td>
												<td>Expose AddChannel component for Sidebar to enable users to add new channels seamlessly within the project architecture.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/AddChannel/AddChannel.css'>AddChannel.css</a></b></td>
												<td>Defines styling for form items and modal body in the Sidebar component to ensure consistent spacing and padding throughout the user interface.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/AddChannel/AddChannel.js'>AddChannel.js</a></b></td>
												<td>- Enables adding new channels with specified users and privacy settings in the React application<br>- The component renders a modal form for creating channels, validating input, and managing user selections<br>- It integrates with the Ant Design library for UI components and handles user interactions for channel creation.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/AddChannel/AddChannel.test.js'>AddChannel.test.js</a></b></td>
												<td>- Implements tests for the AddChannel component, ensuring proper rendering and functionality of input fields, dropdowns, checkboxes, and error alerts<br>- Validates user input handling and event functions like hideModal, onSubmit, onInputChange, handleDropdownChange, and onCheckboxChange.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>ListChannels</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/ListChannels/ListChannels.test.js'>ListChannels.test.js</a></b></td>
												<td>- Manages rendering, searching, and interaction with channels in a modal<br>- Displays joinable and existing rooms, allows searching, handles errors, and triggers actions to join or create rooms<br>- Enables users to interact with channels seamlessly within the application.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/ListChannels/ListChannels.css'>ListChannels.css</a></b></td>
												<td>- Define the styling for channel lists in the sidebar component, ensuring a consistent and user-friendly layout<br>- Set specific dimensions, hover effects, and visual cues for selected items to enhance the overall user experience.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/ListChannels/index.js'>index.js</a></b></td>
												<td>Expose ListChannels component for Sidebar to display and manage channels efficiently within the project architecture.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/ListChannels/mockData.js'>mockData.js</a></b></td>
												<td>- The code file `mockData.js` in the `client/src/components/Sidebar/ListChannels` directory provides mock user and room data for the sidebar component in the project<br>- It defines a sample user with a name and image URL, as well as a room with various attributes such as creation date, name, user IDs, and unread message count<br>- This mock data is used to simulate user and room information within the sidebar, enhancing the user interface and experience of the application.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Sidebar/ListChannels/ListChannels.js'>ListChannels.js</a></b></td>
												<td>- ListChannels component displays and manages channels in a modal, allowing users to search, join, and create channels<br>- It filters channels based on search text, shows joinable and existing channels, and provides actions to join or navigate to channels<br>- The component handles user interactions and displays channel information elegantly.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>Footer</b></summary>
								<blockquote>
									<details>
										<summary><b>SendMessage</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Footer/SendMessage/SendMessage.css'>SendMessage.css</a></b></td>
												<td>- Define the styling for the message box container and Slack messages in the footer component<br>- Customize the appearance of emojis and Slack messages for a visually appealing user interface.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Footer/SendMessage/index.js'>index.js</a></b></td>
												<td>Facilitates exporting the 'SendMessage' component from the Footer directory in the client-side codebase.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Footer/SendMessage/SendMessage.js'>SendMessage.js</a></b></td>
												<td>- Enables users to compose and send messages within a chat interface<br>- Handles message input, emoji selection, and offline status detection<br>- Dynamically adjusts room name based on chat context<br>- Facilitates a seamless messaging experience by integrating with various libraries and utilities.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Footer/SendMessage/SendMessage.test.js'>SendMessage.test.js</a></b></td>
												<td>Tests the rendering and functionality of the SendMessage component, ensuring it displays the message correctly in a textarea and triggers the onChange event.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>Login</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Login/Login.js'>Login.js</a></b></td>
										<td>- Enables user authentication via Google OAuth in the client-side login component<br>- Handles successful and failed login attempts, displaying any errors<br>- The component integrates with the React framework and utilizes environment variables for configuration<br>- This functionality enhances the project's user experience by providing a seamless login process.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/Login/index.js'>index.js</a></b></td>
										<td>Facilitates exporting the Login component from the client-side codebase.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>ChannelInfoDrawer</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/ChannelInfoDrawer/ChannelInfoDrawer.test.js'>ChannelInfoDrawer.test.js</a></b></td>
										<td>- Tests the rendering and visibility of the Channel Info Drawer component based on the channel's visibility status<br>- Verifies that the drawer is displayed correctly with the appropriate title when visible and hidden when not<br>- The tests ensure the component behaves as expected in showing channel information to users.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/ChannelInfoDrawer/index.js'>index.js</a></b></td>
										<td>Expose ChannelInfoDrawer component for easy access and integration within the project's client-side architecture.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/ChannelInfoDrawer/ChannelInfoDrawer.css'>ChannelInfoDrawer.css</a></b></td>
										<td>- Define styling rules for the Channel Info Drawer component, ensuring a consistent and visually appealing layout<br>- Set padding, font size, and alignment properties for various elements within the Channel Info Drawer to enhance user experience and maintain design coherence across the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/components/ChannelInfoDrawer/ChannelInfoDrawer.js'>ChannelInfoDrawer.js</a></b></td>
										<td>- ChannelInfoDrawer component displays information about a chat channel or conversation<br>- It shows details like channel creator, creation date, and members<br>- It adapts its content based on whether the channel is private or public<br>- The component enhances user experience by providing relevant context within the application.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>store</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/store/SlackActions.js'>SlackActions.js</a></b></td>
								<td>- Define Redux actions for managing Slack chat features like updating rooms, setting messages, and showing/hiding various UI elements<br>- These actions facilitate seamless communication between the frontend and backend, ensuring smooth user interactions within the Slack chat application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/store/SlackReducer.js'>SlackReducer.js</a></b></td>
								<td>- Manages state for Slack chat features, including room and message handling, user details, and UI modals<br>- Controls visibility and data updates based on dispatched actions<br>- Maintains loading indicators and modal states for adding/removing channels and people<br>- Facilitates smooth user interactions within the Slack application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/store/mockData.js'>mockData.js</a></b></td>
								<td>- The code file `mockData.js` in the `client/src/store` directory provides mock user and room data for the project<br>- It serves the purpose of simulating user and room information, such as user ID, name, image URL, room creation details, and privacy status<br>- This mock data aids in testing and development by mimicking real user and room data within the codebase architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/store/store.js'>store.js</a></b></td>
								<td>- Creates a Redux store for managing state in the client-side application, using the SlackReducer to handle actions and updates<br>- This file plays a crucial role in maintaining the application's global state and facilitating communication between different components.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>containers</b></summary>
						<blockquote>
							<details>
								<summary><b>SlackHeader</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/index.js'>index.js</a></b></td>
										<td>Facilitates the export of SlackHeaderContainer from the client/src/containers/SlackHeader/index.js file, contributing to the project's architecture by organizing container components efficiently.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/SlackHeaderContainer.js'>SlackHeaderContainer.js</a></b></td>
										<td>- Manages Slack header display based on room and user data, triggering updates when users are added or removed<br>- Connects Redux state to SlackHeader component for seamless data flow and interaction<br>- Maintains user count and facilitates channel info drawer display.</td>
									</tr>
									</table>
									<details>
										<summary><b>HeaderOptions</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/HeaderOptions/index.js'>index.js</a></b></td>
												<td>Facilitates header options functionality by exporting the HeaderOptionsContainer component.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/HeaderOptions/HeaderOptionsContainer.js'>HeaderOptionsContainer.js</a></b></td>
												<td>- Facilitates user interactions within Slack channels by providing options such as adding/removing users, viewing channel details, and deleting channels<br>- Utilizes React components and Redux for state management<br>- Implements lazy loading for improved performance<br>- Enhances user experience by offering a seamless interface for managing channel settings.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>RemovePeople</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/RemovePeople/RemovePeopleContainer.js'>RemovePeopleContainer.js</a></b></td>
												<td>- Manages the removal of users from a Slack room, ensuring the logged-in user remains<br>- Handles user selection, updates room data, and triggers notifications<br>- Integrates with Redux for state management and dispatches actions to hide the removal modal<br>- Maintains a clean and organized UI for a seamless user experience.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/RemovePeople/index.js'>index.js</a></b></td>
												<td>Enables removing people from Slack channels within the project's architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>DeleteChannelConfirm</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/DeleteChannelConfirm/index.js'>index.js</a></b></td>
												<td>Enables deletion confirmation for Slack channels in the client-side container, enhancing user experience and data integrity within the project's architecture.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/DeleteChannelConfirm/DeleteChannelConfirmContainer.js'>DeleteChannelConfirmContainer.js</a></b></td>
												<td>- Manages deletion confirmation for Slack channels, ensuring safe removal and user feedback<br>- Coordinates with Redux store to handle state changes and dispatch actions accordingly<br>- Integrates with ChatKitUtil for room deletion and SlackUtils for room selection<br>- Enhances user experience by providing clear notifications and seamless transitions.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>AddPeople</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/AddPeople/index.js'>index.js</a></b></td>
												<td>Facilitates adding people to Slack channels by exporting the AddPeopleContainer component.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/SlackHeader/AddPeople/AddPeopleContainer.js'>AddPeopleContainer.js</a></b></td>
												<td>- Manages adding people to a Slack channel, notifying members of new additions, and handling user interactions in the Add People modal<br>- Coordinates user selection, room updates, and messaging functionalities seamlessly within the Slack application.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>ChatHome</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/ChatHome/ChatHomeContainer.js'>ChatHomeContainer.js</a></b></td>
										<td>- Manages chat functionality by connecting users, updating rooms, setting messages, and handling user presence<br>- Subscribes users to rooms, removes users, and updates room lists<br>- Renders chat interface components based on user and room data<br>- Handles user authentication and redirects to login if needed.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/ChatHome/ChatHomeContainer.test_.js'>ChatHomeContainer.test_.js</a></b></td>
										<td>Verifies rendering and redirects based on user authentication status in the ChatHomeContainer.test.js file within the ChatHome container.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/ChatHome/index.js'>index.js</a></b></td>
										<td>Facilitates exporting the ChatHomeContainer from the ChatHome directory in the client-side containers, contributing to the project's modular architecture.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>Contents</b></summary>
								<blockquote>
									<details>
										<summary><b>ListMessages</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Contents/ListMessages/ListMessagesContainer.js'>ListMessagesContainer.js</a></b></td>
												<td>- Renders and groups chat messages by day, enhancing user experience by providing a more organized view<br>- Automatically sets read cursor for unread messages and scrolls to the bottom for seamless navigation<br>- Integrates with Redux for state management and React for dynamic UI updates.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Contents/ListMessages/index.js'>index.js</a></b></td>
												<td>- Exports the ListMessagesContainer component from the ListMessages directory within the client's containers<br>- This component likely handles the display and management of a list of messages within the application's user interface.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>Sidebar</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Sidebar/SidebarContainer.test_.js'>SidebarContainer.test_.js</a></b></td>
										<td>- The SidebarContainer.test_ file in the client/src/containers/Sidebar directory tests the rendering of the SidebarContainer component with specific user and room data<br>- It ensures that the component renders successfully, setting up the foundation for testing the logout functionality in future development.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Sidebar/index.js'>index.js</a></b></td>
										<td>- Exports the Sidebar component from the SidebarContainer file in the client-side containers directory<br>- This component likely serves as a key element in the user interface, contributing to the overall structure and functionality of the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Sidebar/SidebarContainer.js'>SidebarContainer.js</a></b></td>
										<td>- Manages the sidebar interactions in the Slack application, handling user selection, room creation, and channel display<br>- Connects with Redux to manage state and dispatch actions for showing channels, adding channels, and loading indicators<br>- Ensures a seamless user experience by redirecting to the login page if not authenticated.</td>
									</tr>
									</table>
									<details>
										<summary><b>AddChannel</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Sidebar/AddChannel/AddChannelContainer.js'>AddChannelContainer.js</a></b></td>
												<td>- Manages the creation of new channels in the Slack application, including handling form submissions, user input, and channel validation<br>- Utilizes Redux for state management and integrates with ChatKit for real-time messaging functionality<br>- Supports adding users to channels and setting channel privacy settings.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Sidebar/AddChannel/index.js'>index.js</a></b></td>
												<td>Facilitates adding new channels to the sidebar in the project architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>ListChannels</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Sidebar/ListChannels/ListChannelsContainer.js'>ListChannelsContainer.js</a></b></td>
												<td>- Manages the list of joinable chat rooms, allowing users to filter and join rooms<br>- Updates the list dynamically and handles room joining operations<br>- Interfaces with Redux to manage state and dispatch actions for showing, hiding, and joining rooms.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Sidebar/ListChannels/index.js'>index.js</a></b></td>
												<td>Facilitates exporting the ListChannelsContainer from the Sidebar component, contributing to the project's modular architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>Footer</b></summary>
								<blockquote>
									<details>
										<summary><b>SendMessage</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Footer/SendMessage/SendMessageContainer.js'>SendMessageContainer.js</a></b></td>
												<td>- Manages sending messages in a chat room, including handling emojis and sending notifications on errors<br>- Integrates with the chat service to send messages from the user to the specified room<br>- Handles user input events like typing, key presses, and emoji selection.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Footer/SendMessage/index.js'>index.js</a></b></td>
												<td>Exports the SendMessageContainer component from the Footer container, facilitating the sending of messages within the project architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>Login</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Login/LoginContainer.js'>LoginContainer.js</a></b></td>
										<td>- Manages user authentication and login flow by handling Google login responses<br>- Posts user profile data to the server, sets login success state, and displays appropriate error messages<br>- Renders the login component with error handling and redirects on successful login.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Login/index.js'>index.js</a></b></td>
										<td>- Exports the LoginContainer component, a key part of the client-side login functionality in the project architecture<br>- This component plays a crucial role in managing user authentication and access control within the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/containers/Login/LoginContainer.test.js'>LoginContainer.test.js</a></b></td>
										<td>- Implements login functionality and authentication redirection for the React application<br>- Manages rendering of the login screen based on user login status and sets up routing for the application<br>- The code ensures proper display of the login screen and redirects authenticated users to the chat home.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/utils/SlackUtils.js'>SlackUtils.js</a></b></td>
								<td>- The code file in `SlackUtils.js` provides functions to manage user interactions within chat rooms<br>- It facilitates tasks such as retrieving joinable and room users, creating messages for channel updates, and handling room-specific functionalities like checking for private chats and admin privileges<br>- These utilities enhance user experience and streamline communication within the chat application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/src/utils/ChatKitUtil.js'>ChatKitUtil.js</a></b></td>
								<td>- Provides functions for managing chat rooms and messages, including adding/removing users, sending messages, creating rooms, subscribing to rooms, and more<br>- Handles user interactions with the chat system, enabling seamless communication within the application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>build</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/build/service-worker.js'>service-worker.js</a></b></td>
						<td>- Registers a Workbox-powered service worker in the web app to efficiently cache and respond to URL requests based on the provided manifest<br>- It ensures proper handling of service worker activation and navigation routes, enhancing the app's offline capabilities<br>- Avoid direct modifications to this auto-generated file; instead, adjust the Workbox build configuration and rebuild the project.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/build/precache-manifest.a3c53c807652b9a709b570d2413ca3ae.js'>precache-manifest.a3c53c807652b9a709b570d2413ca3ae.js</a></b></td>
						<td>Consolidates cached assets for the project, including HTML, CSS, and JavaScript files, optimizing loading times.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/build/asset-manifest.json'>asset-manifest.json</a></b></td>
						<td>- Manages asset paths for the project's static resources, such as JavaScript and CSS files, along with other assets like images and service workers<br>- This file plays a crucial role in mapping the file paths to their corresponding URLs, ensuring proper resource loading and functionality within the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/build/index.html'>index.html</a></b></td>
						<td>- Generates the main HTML file for the Slack project's client build, defining the structure and content of the web application<br>- Includes essential metadata, links to stylesheets and scripts, and sets up the root element for rendering the app<br>- This file serves as the entry point for the frontend user interface.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/build/manifest.json'>manifest.json</a></b></td>
						<td>- Defines the manifest for the Slack Clone web app, specifying its name, icons, start URL, display mode, theme color, and background color<br>- This file plays a crucial role in configuring the app's appearance and behavior when added to a user's device.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>public</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/public/index.html'>index.html</a></b></td>
						<td>- Defines the structure and content of the index.html file in the client/public directory<br>- Sets up the basic layout and initial content for the Slack web application, including metadata, viewport settings, theme color, fonts, and root element<br>- Ensures proper display and functionality of the app in web browsers.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/amitpatil321/React-slack-clone/blob/master/client/public/manifest.json'>manifest.json</a></b></td>
						<td>- Defines the manifest.json file for the Slack Clone project, specifying essential details like the app's name, icons, start URL, display mode, theme color, and background color<br>- This file plays a crucial role in configuring how the web application appears and behaves when added to a user's device.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with React-slack-clone, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm


### ⚙️ Installation

Install React-slack-clone using one of the following methods:

**Build from source:**

1. Clone the React-slack-clone repository:
```sh
❯ git clone https://github.com/amitpatil321/React-slack-clone
```

2. Navigate to the project directory:
```sh
❯ cd React-slack-clone
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run React-slack-clone using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/amitpatil321/React-slack-clone/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/amitpatil321/React-slack-clone/issues)**: Submit bugs found or log feature requests for the `React-slack-clone` project.
- **💡 [Submit Pull Requests](https://github.com/amitpatil321/React-slack-clone/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/amitpatil321/React-slack-clone
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/amitpatil321/React-slack-clone/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=amitpatil321/React-slack-clone">
   </a>
</p>
</details>
