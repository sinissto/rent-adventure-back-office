import { formatDistance, parseISO } from "date-fns";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace("about ", "")
    .replace("in", "In");

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "EUR" }).format(
    value
  );
