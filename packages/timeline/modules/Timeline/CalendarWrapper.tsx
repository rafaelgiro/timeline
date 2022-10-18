import { useRef } from "react";
import { Calendar } from "./components/Calendar";
import { TimelineHeader } from "./components/TimelineHeader";
import { getMinMaxDate } from "./helpers";
import { CalendarContainer } from "./styles";

/**
 * Container for the events that are displayed on the timeline.
 */
export const CalendarWrapper = (props: CalendarWrapperProps) => {
  const { data } = props;
  const calendarRef = useRef<HTMLDivElement>(null);

  function handleScroll(direction: "forward" | "backward") {
    const calendar = calendarRef.current;

    if (calendar) {
      const scrollAmount = calendar.clientWidth * 0.8;

      if (direction === "forward") {
        calendar.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        calendar.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  }

  const dates = getMinMaxDate(Object.values(data));

  return (
    <CalendarContainer>
      <TimelineHeader handleScroll={handleScroll} />
      <Calendar
        from={dates.minDate}
        to={dates.maxDate}
        data={data}
        ref={calendarRef}
      />
    </CalendarContainer>
  );
};

interface CalendarWrapperProps {
  /**
   * Data object where the key is a category for events
   */
  data: Record<string, TimelineEvent>;
}
