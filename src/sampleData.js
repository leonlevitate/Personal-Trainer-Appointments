const today = new Date();

const at = hours => today.setHours(hours, 0);

export const sampleAppointments = [
  { startsAt: at(9), customer: { firstName: "Charlie" } },
  { startsAt: at(10), customer: { firstName: "Iman" } },
  { startsAt: at(11), customer: { firstName: "Naomi" } },
  { startsAt: at(12), customer: { firstName: "George" } },
  { startsAt: at(13), customer: { firstName: "Alexander" } },
  { startsAt: at(14), customer: { firstName: "Luis" } },
  { startsAt: at(15), customer: { firstName: "Luc" } },
  { startsAt: at(16), customer: { firstName: "Robyn" } },
  { startsAt: at(17), customer: { firstName: "Axel" } }
];
