import React from 'react';
import { mount, shallow } from 'enzyme';
import { Input } from 'antd';
import PropTypes from 'prop-types';

import SendMessage from './SendMessage';

const { TextArea } = Input;
let wrapper;

beforeEach(() => {
    const props = {
        state : {
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
            room: { id: "2", name : "Design" },
            onLogoutSuccess: () => { console.log("On logout success") }
        }
    }
    // wrapper = shallow(<SendMessage message={"This is message"} onChange={() => {}} onKeyDown={() => {}}/>, { context: { state: props }});

    wrapper = shallow(
        <SendMessage message={"This is message"} onChange={() => { }} onKeyDown={() => { }} />, {
            context: { props }
        }
    );
});

afterEach(() => {
    wrapper.unmount();
})

it("Renders", () => {
    expect(wrapper.exists()).toBe(true);
})

it("Renders textarea", () => {
    console.log(wrapper.html());
    expect(wrapper.find(TextArea).length).toEqual(1);
})
