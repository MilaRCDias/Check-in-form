import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import testConfig from "../../../testConfig";
import { mount } from "enzyme";
import WelcomeCheckin from "./index";

describe("the welcome checkin step", () => {
  let shallow;
  const props = {
    currentStep: 1,
    handleStep: () => {},
  };
  beforeAll(() => {
    shallow = createShallow();
  });

  it("should capture last name", () => {
    const credentials = { lastName: "wild name" };

    const wrapper = mount(shallow(<WelcomeCheckin />).get(0));
    const input = wrapper.find("#lastName");

    input.value = credentials.lastName;
    expect(input.value).toEqual("wild name");
  });

  it("should capture flight number", () => {
    const credentials = { flightNumber: "fr1234" };

    const wrapper = mount(shallow(<WelcomeCheckin />).get(0));
    const input = wrapper.find("#flightNumber");

    input.value = credentials.flightNumber;
    expect(input.value).toEqual("fr1234");
  });

  it("should match the snapshot", () => {
    const wrapper = mount(shallow(<WelcomeCheckin  />).get(0));

    expect(wrapper.html()).toMatchSnapshot();
  });
});
