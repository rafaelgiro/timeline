/**
 * Take the events and returns the time window of the calendar.
 *
 * @param data Array of first level events
 * @returns min and max date of the events
 */
export const getMinMaxDate = (data: TimelineEvent[]) => {
  const startDates = data.map((item) => item.startDate.getTime());
  const endDates = data.map((item) => item.endDate.getTime());
  const minDate = new Date(Math.min.apply(null, startDates));
  const maxDate = new Date(Math.max.apply(null, endDates));
  return { minDate, maxDate };
};
