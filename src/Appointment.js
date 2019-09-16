import React from "react";

export const Appointment = ({ client: { firstName } }) => (
  <div>{firstName}</div>
);
