import {
  eachDayOfInterval,
  isFirstDayOfMonth,
  isToday,
  lastDayOfMonth,
  startOfMonth,
  startOfToday,
  getDate,
  endOfWeek,
  startOfWeek,
  addMonths,
} from "date-fns";

export function generateCalendar(date = startOfToday()) {
  const firstDayOfTheMonth = startOfMonth(date);
  const lastDayOfTheMonth = lastDayOfMonth(date);
  const days = eachDayOfInterval({
    start: startOfWeek(firstDayOfTheMonth, { weekStartsOn: 1 }),
    end: endOfWeek(lastDayOfTheMonth, { weekStartsOn: 1 }),
  });
  return days;
}
