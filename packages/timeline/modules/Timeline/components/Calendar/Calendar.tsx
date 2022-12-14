import { forwardRef, useEffect, useMemo, useState } from "react";

import { CalendarEvent } from "../CalendarEvent";
import { CalendarSimpleEvent } from "../CalendarSimpleEvent";
import { Day } from "./Day";
import { EmptyCalendar } from "./EmptyCalendar";

import { getDatesBetween } from "./helpers";
import { CalendarWrapper } from "./styles";

/**
 * Horizontal calendar that displays the days of the
 * period between the `from` and `to` dates.
 */
export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const { from, to, data } = props;
    const [today, setToday] = useState<string>();
    const days = useMemo(() => getDatesBetween(from, to), [from, to]);
    const allEndDates = useMemo(
      () => Object.values(data).map((event) => event.endDate),
      [data]
    );

    const categories = Object.keys(data);

    // TODO: handle global category state
    function handleCardClick(cat: string) {
      console.log(cat);
    }

    useEffect(() => {
      setToday(new Date().toLocaleDateString());
    }, []);

    if (!categories.length) return <EmptyCalendar />;

    return (
      <CalendarWrapper daysLength={days.length} innerRef={ref}>
        <div className="background">
          {days.map((day) => {
            const isToday = day.toLocaleDateString() === today;

            return (
              <Day key={day.toISOString()} day={day} isHighlighted={isToday} />
            );
          })}
        </div>
        {categories.map((cat, i) => {
          const eventData = data[cat];
          const previousEventsEndDates = allEndDates.slice(0, i);

          if (eventData.variant === "dashed" || eventData.variant === "dotted")
            return (
              <CalendarSimpleEvent
                firstDate={from}
                key={eventData.description}
                category={cat}
                onEventClick={handleCardClick}
                previousEventsEndDates={previousEventsEndDates}
                {...data[cat]}
              />
            );

          return (
            <CalendarEvent
              firstDate={from}
              key={eventData.description}
              category={cat}
              onEventClick={handleCardClick}
              previousEventsEndDates={previousEventsEndDates}
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
