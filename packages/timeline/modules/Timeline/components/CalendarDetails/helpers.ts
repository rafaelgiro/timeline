/**
 * A function that returns the timestamp of the event.
 *
 * @param startDate When the event starts
 * @param endDate When the event ends
 * @returns A string with the event duration
 */
export function getEventDateSpan(startDate: Date, endDate: Date) {
  const startDay = startDate.getDate();
  const startMonth = startDate.getMonth() + 1;
  const endDay = endDate.getDate();
  const endMonth = endDate.getMonth() + 1;
  return `${startDay}/${startMonth} até ${endDay}/${endMonth}`;
}
