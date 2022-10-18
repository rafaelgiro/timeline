/**
 * Function that creates the dates wich will be displayed in the calendar.
 *
 * @param startDate the earliest date in the timeline
 * @param endDate the latest date in the timeline
 * @returns array of dates between the start and end dates
 */
export const getDatesBetween = (startDate: Date, endDate: Date) => {
  const dates: Date[] = [];
  const theDate = new Date(startDate);

  while (theDate < endDate) {
    dates.push(new Date(theDate));
    theDate.setDate(theDate.getDate() + 1);
  }

  dates.push(endDate);
  return dates;
};
