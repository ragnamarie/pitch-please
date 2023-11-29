export const teams = [
  {
    id: "0",
    name: "C-Jugend",
    bookedTimeSlots: [{ id: "5", timeSlotId: "0" }],
  },
  {
    id: "1",
    name: "D-Jugend",
    bookedTimeSlots: [{ id: "4", timeSlotId: "4" }],
  },

  {
    id: "2",
    name: "1. Frauen",
    bookedTimeSlots: [
      { id: "2", timeSlotId: "2" },
      { id: "3", timeSlotId: "5" },
    ],
  },
  {
    id: "3",
    name: "Alte Herren",
    bookedTimeSlots: [
      { id: "0", timeSlotId: "1" },
      { id: "1", timeSlotId: "3" },
    ],
  },
];

export const availableSlots = [
  {
    id: "0",
    time: "18:00 PM",
    day: "Monday",
    location: "Sportplatz Wiener Straße",
    isAvailable: true,
  },
  {
    id: "1",
    time: "16:00 PM",
    day: "Monday",
    location: "Sportplatz Wiener Straße",
    isAvailable: true,
  },
  {
    id: "2",
    time: "17:00 PM",
    day: "Tuesday",
    location: "Lobeckplatz",
    isAvailable: true,
  },
  {
    id: "3",
    time: "18:00 PM",
    day: "Monday",
    location: "Halle Refik-Veseli-Schule",
    isAvailable: true,
  },
  {
    id: "4",
    time: "16:00 PM",
    day: "Friday",
    location: "Lobeckplatz",
    isAvailable: true,
  },
  {
    id: "5",
    time: "18:00 PM",
    day: "Friday",
    location: "Lobeckplatz",
    isAvailable: true,
  },
];
