import React from 'react';
import { mount } from 'enzyme';

import Sidebar from './Sidebar';

let wrapper;

beforeEach(() => {
    const props = {
        user : { name: "Amit Patil", imageUrl: 'https://randomuser.me/api/portraits/women/66.jpg'},
        rooms: [
                {
                    id: "21192065", isPrivate : false, name : "general", users : [
                        {id : 11, name : "Amit" , presence : { state : "online" }},
                        {id : 12, name : "Coder Patil" , presence : { state : "offline" }},
                        {id : 13, name : "Vanshika Patil" , presence : { state : "online" }},
                        {id: 14, name: "Dev Patil", presence: { state: "offline" }}
                    ]
                },
                { id: "2", isPrivate: false, name: "Design" },
                { id: "3", isPrivate: true, name: "meetings" }
        ],
        room : { id : "2" },
        onLogoutSuccess : () => { console.log("On logout success") }
    }
    wrapper = mount(<Sidebar {...props} />);
});
afterEach(() => {
    wrapper.unmount();
})

it("Renders", () => {
    expect(wrapper.exists()).toBe(true);
})

describe("Testing rooms/channels", () => {
    it("Renders correct number of rooms", () => {
        expect(wrapper.find("#channels").find(".ant-menu-item").length).toEqual(3);
    })

    it("Sets default selected/active room", () => {
        expect(wrapper.find("#channels").find(".ant-menu-item-selected").text()).toEqual("#Design");
    })

    it("Sets clicked room as active", () => {
        // Select first room
        wrapper.find("#channels").find(".ant-menu-item").first().simulate("click");
        expect(wrapper.find("#channels").find(".ant-menu-item-selected").text()).toEqual("#general");
    })
});

describe("Testing users", () => {
    it("Renders correct number of users", () => {
        expect(wrapper.find(".online-status").length).toEqual(4);
    })

    it("Sets correct online status", () => {
        expect(wrapper.find(".online").length).toEqual(2);
        expect(wrapper.find(".offline").length).toEqual(2);
    })

    it("Makes chat/user selected on click", () => {
        wrapper.find("#users").find(".ant-menu-item").first().simulate("click");
        expect(wrapper.find("#users").find(".ant-menu-item-selected").text().trim()).toEqual("Amit");
    })

});