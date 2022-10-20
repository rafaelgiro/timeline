import { Typography } from "../../../../components/Typography";
import { type CalendarEventProps } from "../CalendarEvent";
import { CalendarEventWrapper } from "../CalendarEvent/CalendarEventWrapper";
import {
  getDaysBetweenDates,
  getOverlappingDates,
} from "../CalendarEvent/helpers";
import { DashedEvent } from "./DashedEvent";
import { DottedEvent } from "./DottedEvent";

import { SimpleEventTitle } from "./styles";

export const CalendarSimpleEvent = (props: CalendarEventProps) => {
  const {
    startDate,
    endDate,
    firstDate,
    borderCategory,
    variant,
    name,
    previousEventsEndDates,
  } = props;

  const sizeInDays = getDaysBetweenDates(startDate, endDate);
  const distanceFromStart = getDaysBetweenDates(firstDate, startDate);
  const lineToRender = getOverlappingDates(previousEventsEndDates, startDate);

  return (
    <CalendarEventWrapper
      {...props}
      distanceFromStart={distanceFromStart}
      sizeInDays={sizeInDays}
      lineToRender={lineToRender}
    >
      {variant === "dashed" ? (
        <DashedEvent borderCategory={borderCategory} />
      ) : (
        <DottedEvent borderCategory={borderCategory} />
      )}
      <SimpleEventTitle>
        <Typography htmlTag="strong">{name}</Typography>
      </SimpleEventTitle>
    </CalendarEventWrapper>
  );
};
