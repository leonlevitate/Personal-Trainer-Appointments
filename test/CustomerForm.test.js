import React from "react";
import { createContainer } from "./domManipulators";
import { CustomerForm } from "../src/CustomerForm";
import ReactTestUtils from 'react-dom/test-utils';

describe("CustomerForm", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());

    const form = id => container.querySelector(`form[id="${id}"]`);
    const field = name => form('customer').elements[name];
    const expectToBeInputFieldOfTypeText = formElement => {
      expect(formElement).not.toBeNull();
      expect(formElement.tagName).toEqual("INPUT");
      expect(formElement.type).toEqual("text");
      const labelFor = formElement =>
        container.querySelector(`label[for="${formElement}"]`);
        
        const itRendersALabel = (fieldName, text) =>
        it('renders a label', () => {
          render(<CustomerForm />);
          expect(labelFor(fieldName)).not.toBeNull();
          expect(labelFor(fieldName).textContent).toEqual(text);
        });

        const itAssignsAnIdThatMatchesTheLabelId = fieldName =>
        it('assigns an id that matches the label id', () => {
          render(<CustomerForm />);
          expect(field(fieldName).id).toEqual(fieldName);
        });
        
        it("renders as a text box", () => {
            render(<CustomerForm />);
            expectToBeInputFieldOfTypeText(firstNameField());
        });
        
        const itRendersAsATextBox = fieldName =>
        it('renders as a text box', () => {
          render(<CustomerForm />);
          expectToBeInputFieldOfTypeText(field(fieldName));
        });
        
        const itIncludesTheExistingValue = fieldName =>
        it('includes the existing value', () => {
          render(<CustomerForm {...{ [fieldName]: 'value' }} />);
          expect(field(fieldName).value).toEqual('value');
        });

        const itSubmitsExistingValue = (fieldName, value) =>
        it('saves existing value when submitted', async () => {
          expect.hasAssertions();
          render(
            <CustomerForm
              {...{ [fieldName]: value }}
              onSubmit={props =>
                expect(props[fieldName]).toEqual(value)
              }
            />
          );
          await ReactTestUtils.Simulate.submit(form('customer'));
        });
    
      const itSubmitsNewValue = (fieldName, value) =>
        it('saves new value when submitted', async () => {
          expect.hasAssertions();
          render(
            <CustomerForm
              {...{ [fieldName]: 'existingValue' }}
              onSubmit={props =>
                expect(props[fieldName]).toEqual(value)
              }
            />
          );
          await ReactTestUtils.Simulate.change(field(fieldName), {
            target: { value }
          });
          await ReactTestUtils.Simulate.submit(form('customer'));
        });
    
      describe('first name field', () => {
        itRendersAsATextBox('firstName');
        itIncludesTheExistingValue('firstName');
        itRendersALabel('firstName', 'First name');
        itAssignsAnIdThatMatchesTheLabelId('firstName');
        itSubmitsExistingValue('firstName', 'value');
        itSubmitsNewValue('firstName', 'newValue');
    });
  });
