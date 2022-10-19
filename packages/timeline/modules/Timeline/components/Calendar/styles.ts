import { css } from "@emotion/react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "@emotion/styled";

export const DayContainer = styled.div<DayContainerProps>`
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.color.border};
  border-right: 1px solid ${({ theme }) => theme.color.border};
  min-width: 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .date {
    opacity: 0.2;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    ${({ isHighlighted, theme }) =>
      isHighlighted &&
      css`
        opacity: 1;
        font-weight: bold;
        background-color: ${theme.color.fontPrimary};
        color: ${theme.color.backgroundSecondary};
      `}
  }
`;

export const CalendarWrapper = styled(ScrollContainer)<CalendarWrapperProps>`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${({ daysLength }) => daysLength},
    calc(5rem + 2px)
  );
  margin-top: 1.5rem;
  margin-left: 1rem;
  position: relative;
  padding: 3.25rem 1rem 0 1rem;

  @media ${({ theme }) => theme.screens.lg} {
    padding: 4rem 1.5rem 0 1.5rem;

    &:hover {
      cursor: grab;
    }
  }

  .background {
    grid-column: 1/-1;
    height: 90%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

interface DayContainerProps {
  isHighlighted?: boolean;
}

interface CalendarWrapperProps {
  daysLength: number;
}
