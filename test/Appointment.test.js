import React from "react";
import ReactDOM from "react-dom";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  it("renders the client first name", () => {
    const client = { firstName: "Ashley" };
    const container = document.createElement("div");

    ReactDOM.render(<Appointment client={client} />, container);

    expect(container.textContent).toMatch("Ashley");
  });

  it("renders another client first name", () => {
    const client = { firstName: "Jordan" };
    const container = document.createElement("div");

    ReactDOM.render(<Appointment client={client} />, container);

    expect(container.textContent).toMatch("Jordan");
  });
});
