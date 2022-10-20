import { useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";

import { Champions } from "../../../../components/Champions";
import { Typography } from "../../../../components/Typography";
import { CalendarDetails } from "../CalendarDetails/CalendarDetails";
import { CalendarEventFrame } from "./CalendarEventFrame";
import { CalendarEventWrapper } from "./CalendarEventWrapper";
import { debounce, getDaysBetweenDates, getOverlappingDates } from "./helpers";
import { CalendarEventContainer, Overlay, Tooltip } from "./styles";

/**
 * Component that displays a calendar event in the timeline.
 */
export const CalendarEvent = (props: CalendarEventProps) => {
  const {
    name,
    champions,
    startDate,
    endDate,
    backgroundCategory,
    borderCategory,
    firstDate,
    previousEventsEndDates,
  } = props;
  const championsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [stickyComponentsWidth, setStickyComponentsWidth] = useState({
    champions: 0,
    title: 0,
  });
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "offset", options: { offset: [0, 16] } }],
  });

  const [isHovering, setIsHovering] = useState(false);
  const debouncedSetIsHovering = debounce(setIsHovering, 500);

  const sizeInDays = getDaysBetweenDates(startDate, endDate);
  const distanceFromStart = getDaysBetweenDates(firstDate, startDate);
  const lineToRender = getOverlappingDates(previousEventsEndDates, startDate);

  useEffect(() => {
    const championsWidth = championsRef.current?.clientWidth || 0;
    const titleWidth = titleRef.current?.clientWidth || 0;

    setStickyComponentsWidth({ champions: championsWidth, title: titleWidth });
  }, []);

  return (
    <>
      <CalendarEventWrapper
        {...props}
        distanceFromStart={distanceFromStart}
        sizeInDays={sizeInDays}
        lineToRender={lineToRender}
      >
        <CalendarEventContainer
          championsWidth={stickyComponentsWidth.champions}
          titleWidth={stickyComponentsWidth.title}
          onMouseEnter={() => debouncedSetIsHovering(true)}
          onMouseLeave={() => debouncedSetIsHovering(false)}
          isHovering={isHovering}
          ref={(ref) => setReferenceElement(ref)}
        >
          <div className="calendar-event-background" />
          <CalendarEventFrame
            sizeInDays={sizeInDays}
            borderCategory={borderCategory}
            backgroundCategory={backgroundCategory}
          />
          <div className="calendar-event-content">
            {champions && (
              <Champions
                champions={champions}
                className="champions"
                ref={championsRef}
              />
            )}
            <Typography htmlTag="h3" ref={titleRef}>
              {name}
            </Typography>
          </div>
          <div className="calendar-event-details"></div>
        </CalendarEventContainer>
      </CalendarEventWrapper>
      <Overlay isHovering={isHovering} id="overlay" />
      <Tooltip
        ref={(ref) => setPopperElement(ref)}
        style={styles.popper}
        {...attributes.popper}
        isHovering={isHovering}
      >
        <CalendarDetails {...props} />
      </Tooltip>
    </>
  );
};

export interface CalendarEventProps extends TimelineEvent {
  /**
   * Event handler to filter sub-events on click
   */
  onEventClick(category: string): void;
  /**
   * Key of the data object
   */
  category: string;
  /**
   * First date of the timeline
   */
  firstDate: Date;
  /**
   * Previous events dates
   */
  previousEventsEndDates: Date[];
}
