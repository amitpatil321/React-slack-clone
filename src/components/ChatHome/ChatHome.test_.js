// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { Layout } from 'antd';

// import ChatHome from './ChatHome';
// import Sidebar from '../../containers/Sidebar';

// const {
//     Header, Content, Footer, Sider,
// } = Layout;

// it("Contains header, sidebar, content and footer sections", () => {
//     let wrapper = shallow(<ChatHome ><Sidebar /></ChatHome>)

//     expect(wrapper.find(Sider).length).toEqual(1);
// });

/*
it('Contains sidebar component', () => {
    const props = {
        user: { name: "Amit Patil", imageUrl: 'https://randomuser.me/api/portraits/women/66.jpg' },
        rooms: [
            {
                id: "21192065", isPrivate: false, name: "general", users: [
                    { id: 11, name: "Amit", presence: { state: "online" } },
                    { id: 12, name: "Coder Patil", presence: { state: "offline" } },
                    { id: 13, name: "Vanshika Patil", presence: { state: "online" } },
                    { id: 14, name: "Dev Patil", presence: { state: "offline" } }
                ]
            },
            { id: "2", isPrivate: false, name: "Design" },
            { id: "3", isPrivate: true, name: "meetings" }
        ],
        room: { id: "2" },
        onLogoutSuccess: () => { console.log("On logout success") }
    }

    let SidebarComp = mount(<Sidebar {...props} />);
    let wrapper = mount(<ChatHome ><SidebarComp /></ChatHome>)

    expect(wrapper.find(SidebarComp).length).toEqual(1);
})
*/