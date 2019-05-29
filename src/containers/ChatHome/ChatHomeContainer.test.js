import React from 'react';
import { mount, shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

import ChatHome from '../../containers/ChatHome';
import ChatHomeComponent from '../../components/ChatHome';

let wrapper;
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

beforeEach(() => {
    wrapper = shallow(<ChatHome {...props} />);
})

afterEach(() => {
    wrapper.unmount();
})

it("Renders", ()=>{
    expect(wrapper.exists()).toBe(true);
});

// TODO : Make this test run

// it("Renders ChatHome if googleId is set in localStorage", () => {
//     const localStorage = jest.fn();
//     global.localStorage.getItem = key => '{ "googleId" : 11}';

//     expect(wrapper.find("Channels").length).toEqual(1);
// });

it("Redirects to login if googleId in localstorage is not set", () => {
    const localStorage = jest.fn();
    localStorage.getItem = key => null

    expect(wrapper.find(Redirect).length).toEqual(1)
});

