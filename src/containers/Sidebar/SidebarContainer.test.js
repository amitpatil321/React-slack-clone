import React from 'react';
import SidebarContainer from './SidebarContainer';
import { mount, shallow } from 'enzyme';

let wrapper;

beforeEach(() => {
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
    };
    wrapper = mount(<SidebarContainer {...props} />);
});
afterEach(() => {
    wrapper.unmount();
})

it("Renders", () => {
    expect(wrapper.exists()).toBe(true);
});


// TODO : Test logout function