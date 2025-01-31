import Stat from "./Stat.jsx";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers.js";

function Stats({ bookings, confirmedRent, numDays, bikesCount }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.rentPrice, 0);
  const checkins = confirmedRent.length;
  const occupation =
    (confirmedRent.reduce((acc, cur) => acc + cur.numDays, 0) /
      (numDays * bikesCount)) *
    100;
  return (
    <>
      <Stat
        title={"Bookings"}
        color={"blue"}
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title={"Sales"}
        color={"green"}
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title={"Check ins"}
        color={"indigo"}
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title={"Rent rate"}
        color={"yellow"}
        icon={<HiOutlineChartBar />}
        value={`${Math.round(occupation)} %`}
      />
    </>
  );
}

export default Stats;
