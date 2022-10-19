import { type ReactNode } from "react";
import { type CalendarEventProps } from "./CalendarEvent";
import { CalendarEventPosition } from "./styles";

/**
 * Component that defines if the event will be an external link
 * or a button to filter sub-events.
 */
export const CalendarEventWrapper = (props: CalendarEventWrapperProps) => {
  const {
    url,
    subEvents,
    children,
    category,
    onEventClick,
    distanceFromStart,
    sizeInDays,
    variant,
  } = props;

  const htmlTag = url ? "a" : "button";
  const dataTestId = url ? "external-event" : "another-event";

  return (
    <CalendarEventPosition
      distanceFromStart={distanceFromStart}
      sizeInDays={sizeInDays}
      href={url}
      data-testid={dataTestId}
      as={url || subEvents ? htmlTag : "article"}
      target={url ? "_blank" : undefined}
      rel={url ? "noreferrer" : undefined}
      onClick={subEvents ? () => onEventClick(category) : undefined}
      isSimpleEvent={variant === "dashed" || variant === "dotted"}
    >
      {children}
    </CalendarEventPosition>
  );
};

interface CalendarEventWrapperProps extends CalendarEventProps {
  /**
   * CalendarEvent content
   */
  children: ReactNode;
  /**
   * Distance in days/column from the first date.
   */
  distanceFromStart: number;
  /**
   * Number of days/columns the event will take.
   */
  sizeInDays: number;
}
