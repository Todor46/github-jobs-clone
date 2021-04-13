import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export default function formatJobDate (date) {
  if (differenceInYears(new Date(), new Date(date))) {
    const years = differenceInYears(new Date(), new Date(date));
    switch (years) {
      case 1:
        return "1 year ago";
      default:
        return `${years} years ago`;
    }
  }

  if (differenceInMonths(new Date(), new Date(date))) {
    const months = differenceInMonths(new Date(), new Date(date));
    switch (months) {
      case 1:
        return "1 month ago";
      default:
        return `${months} months ago`;
    }
  }

  let days = differenceInDays(new Date(), new Date(date));
  switch (days) {
    case 0:
      return "Today";
    case 1:
      return "Yesterday";
    default:
      return `${days} days ago`;
  }
};