import React from "react";
import ReactDOM from "react-dom";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  it("renders the client first name", () => {
    const client = { firstName: "Ashley" };
    const component = <Appointment client={client} />;
    const container = document.createElement("div");
    document.body.appendChild(container);

    ReactDOM.render(component, container);

    expect(document.body.textContent).toMatch("Ashley");
  });
});
