import React from "react";
import ReactDOM from "react-dom";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  let container;
  let client;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = component => ReactDOM.render(component, container);

  it("renders the client first name", () => {
    client = { firstName: "Ashley" };
    render(<Appointment client={client} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("renders another client first name", () => {
    client = { firstName: "Jordan" };
    render(<Appointment client={client} />);
    expect(container.textContent).toMatch("Jordan");
  });
});
