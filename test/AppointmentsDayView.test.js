import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";
import { Appointment, AppointmentsDayView } from "../src/AppointmentsDayView";

describe("Appointment", () => {
  let container;
  let client = {};

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = component => ReactDOM.render(component, container);

  const appointmentTable = () =>
    container.querySelector("#appointmentView > table");

  it("renders a table", () => {
    render(<Appointment client={client} />);
    expect(appointmentTable()).not.toBeNull();
  });

  it("renders the client first name", () => {
    client = { firstName: "Ashley" };
    render(<Appointment client={client} />);
    expect(appointmentTable().textContent).toMatch("Ashley");
  });

  it("renders another client first name", () => {
    client = { firstName: "Jordan" };
    render(<Appointment client={client} />);
    expect(appointmentTable().textContent).toMatch("Jordan");
  });

  it("renders the client last name", () => {
    client = { lastName: "Jones" };
    render(<Appointment client={client} />);
    expect(appointmentTable().textContent).toMatch("Jones");
  });

  it("renders another client last name", () => {
    client = { lastName: "Smith" };
    render(<Appointment client={client} />);
    expect(appointmentTable().textContent).toMatch("Smith");
  });

  it("renders the client phone number", () => {
    client = { phoneNumber: "123456789" };
    render(<Appointment client={client} />);
    expect(appointmentTable().textContent).toMatch("123456789");
  });

  it("renders another client phone number", () => {
    client = { phoneNumber: "234567890" };
    render(<Appointment client={client} />);
    expect(appointmentTable().textContent).toMatch("234567890");
  });

  it("renders the Personal Trainer name", () => {
    render(<Appointment client={client} personalTrainer="Sam" />);
    expect(appointmentTable().textContent).toMatch("Sam");
  });

  it("renders another Personal Trainer name", () => {
    render(<Appointment client={client} personalTrainer="Joe" />);
    expect(appointmentTable().textContent).toMatch("Joe");
  });

  it("renders the PT service", () => {
    render(<Appointment client={client} service="Cardio" />);
    expect(appointmentTable().textContent).toMatch("Cardio");
  });

  it("renders another PT service", () => {
    render(<Appointment client={client} service="Induction" />);
    expect(appointmentTable().textContent).toMatch("Induction");
  });

  it("renders the appointments notes", () => {
    render(<Appointment client={client} notes="abc" />);
    expect(appointmentTable().textContent).toMatch("abc");
  });

  it("renders other appointment notes", () => {
    render(<Appointment client={client} notes="def" />);
    expect(appointmentTable().textContent).toMatch("def");
  });

  it("renders a heading with the time", () => {
    const today = new Date();
    const timestamp = today.setHours(9, 0, 0);
    render(<Appointment client={client} startsAt={timestamp} />);
    expect(container.querySelector("h3")).not.toBeNull();
    expect(container.querySelector("h3").textContent).toEqual(
      "Today’s appointment at 09:00"
    );
  });
});

describe("AppointmentsDayView", () => {
  const today = new Date();
  const appointments = [
    { startsAt: today.setHours(12, 0), client: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), client: { firstName: "Jordan" } }
  ];
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = component => ReactDOM.render(component, container);

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toMatch(
      "There are no Personal Training sessions scheduled for today"
    );
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("has a button element in each li", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li > button")).toHaveLength(2);
    expect(container.querySelectorAll("li > button")[0].type).toEqual("button");
  });

  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll("button")[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch("Jordan");
  });

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders multiple appointments in an ol element", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appointment in an li", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelectorAll("li")[0].textContent).toEqual("12:00");
    expect(container.querySelectorAll("li")[1].textContent).toEqual("13:00");
  });

  it("adds toggled class to button when selected", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll("button")[1];
    ReactTestUtils.Simulate.click(button);
    expect(button.className).toMatch("toggled");
  });

  it("does not add toggled class if button is not selected", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll("button")[1];
    expect(button.className).not.toMatch("toggled");
  });
});
