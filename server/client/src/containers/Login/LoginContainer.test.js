import React from 'react';
import { Redirect, BrowserRouter } from 'react-router-dom';

import LoginContainer from './LoginContainer';
import { mount, shallow } from 'enzyme';

let wrapper, wrapperRouter, wrapperMount;

beforeEach(() => {
    wrapper = shallow(<LoginContainer />);
    // wrapperShallow = shallow(<Router><LoginContainer /></Router>);
    wrapperRouter = mount(<BrowserRouter><LoginContainer /></BrowserRouter>);
});
afterEach(() => {
    wrapper.unmount();
})

it("Renders", () => {
    expect(wrapper.exists()).toBe(true);
});

it("It shows login screen if user is not logged in", () => {
    wrapper.setState({ loginSuccess: false })
    expect(wrapper.find("Login").length).toEqual(1);
    wrapper.setState({ loginSuccess : true})
    expect(wrapper.find("Login").length).toEqual(0);
});

// TODO : Test if it redirects to chat home, if authenticated.