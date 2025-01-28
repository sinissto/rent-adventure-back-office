import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // BIKE 01
  {
    created_at: fromToday(-20, true),
    startDate: fromToday(0),
    endDate: fromToday(7),
    bikeId: 1,
    riderId: 2,
    additionalRequest:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    isPaid: false,
  },
  {
    created_at: fromToday(-33, true),
    startDate: fromToday(-23),
    endDate: fromToday(-13),
    bikeId: 1,
    riderId: 3,
    additionalRequest: "",
    isPaid: true,
  },
  {
    created_at: fromToday(-27, true),
    startDate: fromToday(12),
    endDate: fromToday(18),
    bikeId: 1,
    riderId: 4,
    additionalRequest: "",
    isPaid: false,
  },

  // BIKE 02
  {
    created_at: fromToday(-45, true),
    startDate: fromToday(-45),
    endDate: fromToday(-29),
    bikeId: 2,
    riderId: 5,
    additionalRequest: "",
    isPaid: true,
  },
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(15),
    endDate: fromToday(18),
    bikeId: 2,
    riderId: 6,
    additionalRequest: "",
    isPaid: true,
  },
  {
    created_at: fromToday(-5, true),
    startDate: fromToday(33),
    endDate: fromToday(48),
    bikeId: 2,
    riderId: 7,
    additionalRequest: "",
    isPaid: false,
  },

  // BIKE 03
  {
    created_at: fromToday(-65, true),
    startDate: fromToday(-25),
    endDate: fromToday(-20),
    bikeId: 3,
    riderId: 8,
    additionalRequest: "",
    isPaid: true,
  },
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(-2),
    endDate: fromToday(0),
    bikeId: 3,
    riderId: 9,
    additionalRequest: "We will be bringing our small dog with us",
    isPaid: true,
  },
  {
    created_at: fromToday(-14, true),
    startDate: fromToday(-14),
    endDate: fromToday(-11),
    bikeId: 3,
    riderId: 10,
    additionalRequest: "",
    isPaid: true,
  },

  // BIKE 04
  {
    created_at: fromToday(-30, true),
    startDate: fromToday(-4),
    endDate: fromToday(8),
    bikeId: 4,
    riderId: 11,
    additionalRequest: "",
    isPaid: true,
  },
  {
    created_at: fromToday(-1, true),
    startDate: fromToday(12),
    endDate: fromToday(17),
    bikeId: 4,
    riderId: 12,
    additionalRequest: "",
    isPaid: false,
  },
  {
    created_at: fromToday(-3, true),
    startDate: fromToday(18),
    endDate: fromToday(19),
    bikeId: 4,
    riderId: 13,
    additionalRequest: "",
    isPaid: true,
  },

  // BIKE 05
  {
    created_at: fromToday(0, true),
    startDate: fromToday(14),
    endDate: fromToday(21),
    bikeId: 5,
    riderId: 14,
    additionalRequest: "",
    isPaid: false,
  },
  {
    created_at: fromToday(-6, true),
    startDate: fromToday(-6),
    endDate: fromToday(-4),
    bikeId: 5,
    riderId: 15,
    additionalRequest: "",
    isPaid: true,
  },
  {
    created_at: fromToday(-4, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    bikeId: 5,
    riderId: 16,
    additionalRequest: "",
    isPaid: true,
  },

  // BIKE 06
  {
    created_at: fromToday(-3, true),
    startDate: fromToday(0),
    endDate: fromToday(11),
    bikeId: 6,
    riderId: 17,
    additionalRequest:
      "We will be checking in late, around midnight. Hope that's okay :)",
    isPaid: true,
  },
  {
    created_at: fromToday(-16, true),
    startDate: fromToday(-16),
    endDate: fromToday(-9),
    bikeId: 6,
    riderId: 18,
    additionalRequest: "I will need a rollaway bed for one of the guests",
    isPaid: true,
  },
  {
    created_at: fromToday(-18, true),
    startDate: fromToday(-4),
    endDate: fromToday(-1),
    bikeId: 6,
    riderId: 19,
    additionalRequest: "",
    isPaid: true,
  },

  // BIKE 07
  {
    created_at: fromToday(-2, true),
    startDate: fromToday(17),
    endDate: fromToday(23),
    bikeId: 7,
    riderId: 20,
    additionalRequest: "",
    isPaid: false,
  },
  {
    created_at: fromToday(-7, true),
    startDate: fromToday(40),
    endDate: fromToday(50),
    bikeId: 7,
    riderId: 21,
    additionalRequest: "",
    isPaid: true,
  },
  {
    created_at: fromToday(-55, true),
    startDate: fromToday(32),
    endDate: fromToday(37),
    bikeId: 7,
    riderId: 22,
    additionalRequest: "",
    isPaid: true,
  },

  // BIKE 08
  {
    created_at: fromToday(-8, true),
    startDate: fromToday(-5),
    endDate: fromToday(0),
    bikeId: 8,
    riderId: 1,
    additionalRequest:
      "My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",
    isPaid: true,
  },
  {
    created_at: fromToday(0, true),
    startDate: fromToday(0),
    endDate: fromToday(5),
    bikeId: 8,
    riderId: 23,
    additionalRequest:
      "I am celebrating my anniversary, can you arrange for any special amenities or decorations?",
    isPaid: true,
  },
  {
    created_at: fromToday(-10, true),
    startDate: fromToday(10),
    endDate: fromToday(13),
    bikeId: 8,
    riderId: 24,
    additionalRequest: "",
    isPaid: true,
  },
];
