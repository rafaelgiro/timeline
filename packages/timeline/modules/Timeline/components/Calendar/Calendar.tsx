import { forwardRef, useMemo } from "react";

import { CalendarEvent } from "../CalendarEvent";
import { Day } from "./Day";

import { getDatesBetween } from "./helpers";
import { CalendarWrapper } from "./styles";

/**
 * Horizontal calendar that displays the days of the
 * period between the `from` and `to` dates.
 */
export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const { from, to, data } = props;
    const days = useMemo(() => getDatesBetween(from, to), [from, to]);

    const categories = Object.keys(data);

    // TODO: handle global category state
    function handleCardClick(cat: string) {
      console.log(cat);
    }

    return (
      <CalendarWrapper daysLength={days.length} innerRef={ref}>
        <div className="background">
          {days.map((day) => {
            const isToday =
              day.toLocaleDateString() === new Date().toLocaleDateString();

            return (
              <Day key={day.toISOString()} day={day} isHighlighted={isToday} />
            );
          })}
        </div>
        {categories.map((cat) => {
          const eventData = data[cat];
          return (
            <CalendarEvent
              firstDate={from}
              key={eventData.description}
              category={cat}
              onEventClick={handleCardClick}
              {...data[cat]}
            />
          );
        })}
      </CalendarWrapper>
    );
  }
);

Calendar.displayName = "Calendar";

interface CalendarProps {
  from: Date;
  to: Date;
  data: Record<string, TimelineEvent>;
}
