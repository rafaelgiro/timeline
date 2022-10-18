import styled from "@emotion/styled";

export const BackgroundContainer = styled.div`
  grid-column: 1/13;
  grid-row: 2/3;
  overflow: hidden;
  position: relative;
  pointer-events: none;

  @media ${({ theme }) => theme.screens.lg} {
    grid-column: 3/13;
    grid-row: 1/3;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0.5rem;
    z-index: -1;
    height: 100%;

    @media ${({ theme }) => theme.screens.lg} {
      height: auto;
      top: 0;
    }
  }
`;

export const CalendarContainer = styled.section`
  grid-column: 1/13;
  padding: 0.25rem;
  grid-row: 2/3;
  height: 50vh;

  .indiana-scroll-container {
    height: 50vh;
  }

  @media ${({ theme }) => theme.screens.lg} {
    grid-column: 3/13;
    grid-row: 1/3;
    margin-bottom: 20vh;
    padding: 2% 2.5%;
    min-height: 50vh;
    height: unset;
  }
`;

export const CardsContainer = styled.section`
  grid-column: 1/-1;
  grid-row: 4/5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-bottom: 1rem;

    @media ${({ theme }) => theme.screens.lg} {
      margin-right: 1rem;
    }
  }

  @media ${({ theme }) => theme.screens.lg} {
    grid-column: 2/13;
    grid-row: 2/3;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
