import React, { useState } from "react";

const timeIncrements = (numTimes, startTime, increment) =>
  Array(numTimes)
    .fill([startTime])
    .reduce((acc, _, i) =>
      acc.concat([startTime + i * increment])
    );

const dailyTimeSlots = (gymOpensAt, gymClosesAt) => {
  const totalSlots = (gymClosesAt - gymOpensAt) * 2;
  const startTime = new Date().setHours(gymOpensAt, 0, 0, 0);
  const increment = 30 * 60 * 1000;
  return timeIncrements(totalSlots, startTime, increment);
};

const weeklyDateValues = startDate => {
  const midnight = new Date(startDate).setHours(0, 0, 0, 0);
  const increment = 24 * 60 * 60 * 1000;
  return timeIncrements(7, midnight, increment);
};

const toShortDate = timestamp => {
  const [day, , dayOfMonth] = new Date(timestamp)
    .toDateString()
    .split(' ');
  return `${day} ${dayOfMonth}`;
};

const toTimeValue = timestamp =>
  new Date(timestamp).toTimeString().substring(0, 5);

const TimeSlotTable = ({ gymOpensAt, gymClosesAt, today }) => {
  const dates = weeklyDateValues(today);
  const timeSlots = dailyTimeSlots(gymOpensAt, gymClosesAt);
  return (
    <table id="time-slots">
      <thead>
        <tr>
          <th />
          {dates.map(d => (
            <th key={d}>{toShortDate(d)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map(timeSlot => (
          <tr key={timeSlot}>
            <th>{toTimeValue(timeSlot)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export const AppointmentForm = ({ 
  selectableServices, 
  service, 
  onSubmit,
  gymOpensAt,
  gymClosesAt,
  today
 }) => {
  const [appointment, setAppointment] = useState({ service });

  const handleServiceChange = ({ target: { value } }) =>
    setAppointment(appointment => ({
      ...appointment,
      service: value
    }));

  return (
    <form id="appointment" onSubmit={() => onSubmit(appointment)}>
      <label htmlFor="service">Gym service</label>
      <select
        name="service"
        id="service"
        value={service}
        onChange={handleServiceChange}
      >
        <option />
        {selectableServices.map(s => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <TimeSlotTable
        gymOpensAt={gymOpensAt}
        gymClosesAt={gymClosesAt}
        today={today}
      />
    </form>
  );
};

AppointmentForm.defaultProps = {
  today: new Date(),
  gymOpensAt: 9,
  gymClosesAt: 19,
  selectableServices: [
    "Cardiovascular",
    "HIIT",
    "Strength Training",
    "Abs",
    "Yoga",
    "Lifts"
  ]
};
