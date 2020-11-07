import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import testConfig from "../../../testConfig";
import { mount } from "enzyme";
import UserForm from "./index";

describe("the welcome checkin step", () => {
  let shallow;
  const props = {
    currentStep: 1,
    handleStep: () => {},
    formValues: {},
    setStep: () => {},
    nationalityList: [],
  };
  beforeAll(() => {
    shallow = createShallow();
  });

  it("should capture first name", () => {
    const credentials = { firstName: "first name" };

    const wrapper = mount(shallow(<UserForm {...props} />).get(0));
    const input = wrapper.find("#firstName");

    input.value = credentials.firstName;
    expect(input.value).toEqual("first name");
  });

  it("should capture passport number", () => {
    const credentials = { passportNumber: "ee5432" };

    const wrapper = mount(shallow(<UserForm {...props} />).get(0));
    const input = wrapper.find("#passportNumber");

    input.value = credentials.passportNumber;
    expect(input.value).toEqual("ee5432");
  });

 it("should capture nationality", () => {
   const credentials = { nationality: "Austria" };

   const wrapper = mount(shallow(<UserForm {...props} />).get(0));
   const input = wrapper.find("#nationality");

   input.value = credentials.nationality;
   expect(input.value).toEqual("Austria");
 });

  it("should match the snapshot", () => {
    const wrapper = mount(shallow(<UserForm {...props} />).get(0));

    expect(wrapper.html()).toMatchSnapshot();
  });
});
