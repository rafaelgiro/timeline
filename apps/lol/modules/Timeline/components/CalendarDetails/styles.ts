import styled from "@emotion/styled";
import { type CalendarDetailsProps } from "./CalendarDetails";

export const CalendarDetailsContainer = styled.div<{
  borderCategory: CalendarDetailsProps["borderCategory"];
}>`
  display: flex;
  flex-direction: column;

  .event-details {
    display: flex;
    align-items: center;

    h3 {
      margin: 0;
    }

    h4 {
      margin-top: 0;
    }

    p {
      margin: 0;
    }

    &__img {
      width: 6.5rem;
      height: 6.5rem;
      position: relative;
      border-radius: 20%;
      margin-right: 2rem;
      z-index: 90;

      img {
        border-radius: 20%;
        width: 6.5rem;
      }

      svg {
        position: absolute;
        width: 7rem;
        height: 7rem;
        top: 0;
        left: 0;
        z-index: 10;
        transition: transform 0.2s ease-out;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;

      & > * {
        margin-bottom: 0.5rem;
      }

      &__date {
        width: fit-content;
        padding: 0.25rem;
        border-radius: 0.25rem;
        background-color: ${({ theme }) => theme.color.backgroundPrimary};
      }
    }
  }

  .champions-details {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &__champion {
      margin-right: 1rem;
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 0.25rem;
      }
    }
  }

  .view-more {
    margin-top: 0.25rem;
    text-align: right;

    span {
      color: ${({ borderCategory, theme }) => theme.color[borderCategory]};
    }
  }
`;
