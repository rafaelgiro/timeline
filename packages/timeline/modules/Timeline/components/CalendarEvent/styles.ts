import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CalendarEventContainer = styled.div<CalendarEventContainerProps>`
  position: relative;

  ${({ isHovering }) =>
    isHovering &&
    css`
      z-index: 300;
    `}

  .calendar-event-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.backgroundPrimary};
    border-radius: 0.25rem;
    z-index: 0;
  }

  .calendar-event-content {
    display: flex;
    align-items: center;
    padding: 0rem 0.75rem 0rem 0.25rem;
    position: relative;
    z-index: 10;

    .champions {
      position: sticky;
      left: 0.125rem;
      margin-left: 1rem;
      margin-right: calc(${({ titleWidth }) => titleWidth}px);

      @media ${({ theme }) => theme.screens.lg} {
        left: 0rem;
        margin-right: calc(${({ titleWidth }) => titleWidth}px - 2rem);
      }
    }

    h3 {
      margin: 0.75rem 0;
      position: sticky;
      left: calc(${({ championsWidth }) => championsWidth}px + 0.5rem);

      @media ${({ theme }) => theme.screens.lg} {
        left: calc(${({ championsWidth }) => championsWidth}px + 1rem);
      }
    }
  }
`;

export const CalendarEventPosition = styled.div<CalendarEventPositionProps>`
  margin: 1rem 1rem;
  position: relative;

  ${({ isSimpleEvent }) =>
    isSimpleEvent &&
    css`
      margin: 0.25rem 1rem;
    `}

  grid-column: ${({ distanceFromStart }) => distanceFromStart + 1} / span
    ${({ sizeInDays }) => sizeInDays + 1};
  grid-row: ${({ lineToRender }) => lineToRender + 1};
`;

export const CalendarEventFrameContainer = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 1.5rem);
  height: calc(100% + 1.5rem);

  // TODO: svg specific width and height if needed
  &.small {
  }

  &.medium {
  }

  &.large {
  }

  &.event-frame {
    z-index: 10;
  }

  &.event-background {
    z-index: -1;
  }
`;

export const Overlay = styled.div<{
  isHovering: CalendarEventContainerProps["isHovering"];
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  backdrop-filter: blur(4rem);
  z-index: 200;
  pointer-events: none;
  transition: opacity 0.5s ease-out;

  ${({ isHovering }) =>
    isHovering
      ? css`
          visibility: visible;
          opacity: 0.7;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;

export const Tooltip = styled.div<{ isHovering?: boolean }>`
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  border-radius: 0.25rem;
  padding: 1rem;
  max-width: 30rem;
  z-index: 300;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s ease-out;

  ${({ isHovering }) =>
    isHovering &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

interface CalendarEventContainerProps {
  /**
   * The width of the champion's container in pixels
   */
  championsWidth: number;
  /**
   * The width of the title in pixels.
   */
  titleWidth: number;
  /**
   * If the user is hovering the event.
   */
  isHovering?: boolean;
}

interface CalendarEventPositionProps {
  /**
   * The distance from the start of the calendar in days.
   * To be used as the grid-column-start value.
   */
  distanceFromStart: number;
  /**
   * The size of the event in days.
   * To be used as the grid-column-span value.
   */
  sizeInDays: number;
  /**
   * External link
   */
  href?: string;
  /**
   * Link `target` attribute.
   */
  target?: string;
  /**
   * Link `rel` attribute.
   */
  rel?: string;
  /**
   * If true, the event has less margin.
   */
  isSimpleEvent: boolean;
  /**
   * In wich line the event will be rendered
   */
  lineToRender: number;
}
