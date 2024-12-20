enum DayOfWeek {
  Monday = "weekday",
  Tuesday = "weekday",
  Wednesday = "weekday",
  Thursday = "weekday",
  Friday = "weekday",
  Saturday = "weekend",
  Sunday = "weekend",
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === "weekend";
};

isWeekend(DayOfWeek.Wednesday);
