import React from "react";
import ReactDOM from "react-dom";
import { Appointment, AppointmentsDayView } from "../src/Appointment";

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

describe("AppointmentsDayView", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = component => ReactDOM.render(component, container);

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
  });
});
