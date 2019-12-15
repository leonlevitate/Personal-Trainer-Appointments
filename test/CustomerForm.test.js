import React from "react";
import { createContainer } from "./domManipulators";
import { CustomerForm } from "../src/CustomerForm";

describe("CustomerForm", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());

    const form = id => container.querySelector(`form[id="${id}"]`);
    const firstNameField = () => form("customer").elements.firstName;
    const expectToBeInputFieldOfTypeText = formElement => {
      expect(formElement).not.toBeNull();
      expect(formElement.tagName).toEqual("INPUT");
      expect(formElement.type).toEqual("text");
    };

    it("renders as a text box", () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfTypeText(firstNameField());
    });

    it("renders the first name field as a text box", () => {
      render(<CustomerForm />);
      expect(field).not.toBeNull();
      expect(field.tagName).toEqual("INPUT");
      expect(field.type).toEqual("text");
    });

    it("includes the existing value for the first name", () => {
      render(<CustomerForm firstName="Ashley" />);
      expect(firstNameField().value).toEqual("Ashley");
    });
  });
});
