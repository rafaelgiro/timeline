import { useTheme } from "@emotion/react";
import { useMemo } from "react";
import {
  getRandomEventBackground,
  getRandomEventFrame,
  handleSize,
} from "./helpers";
import { CalendarEventFrameContainer } from "./styles";

/**
 * Component that displays a frame around the calendar event.
 */
export const CalendarEventFrame = (props: CalendarEventFrameProps) => {
  const { sizeInDays, borderCategory, backgroundCategory } = props;
  const theme = useTheme();

  const size = useMemo(() => handleSize(sizeInDays), [sizeInDays]);
  const frame = useMemo(() => getRandomEventFrame(size.size), [size.size]);
  const background = useMemo(
    () => getRandomEventBackground(size.size),
    [size.size]
  );

  return (
    <>
      <CalendarEventFrameContainer
        className="event-background"
        data-testid={size.dataTestId}
        viewBox={size.viewBox}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={background} fill={theme.color[backgroundCategory]} />
      </CalendarEventFrameContainer>
      <CalendarEventFrameContainer
        className="event-frame"
        viewBox={size.viewBox}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={frame}
          stroke={theme.color[borderCategory]}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </CalendarEventFrameContainer>
    </>
  );
};

interface CalendarEventFrameProps {
  /**
   * Color category for event's border
   */
  borderCategory: Category;
  /**
   * Color category for event's background
   */
  backgroundCategory: Category;
  /**
   * Size of the event in days
   */
  sizeInDays: number;
}
