import React from "react";
import {shallow} from "enzyme";
import {About} from "./About";

test("About component should render", () => {
    const component = shallow(<About/>);

    expect(component).toMatchSnapshot();
});
