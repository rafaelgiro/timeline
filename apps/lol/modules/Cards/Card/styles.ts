import styled from "@emotion/styled";

export const ExternalCardContainer = styled.div``;

export const EventCardContainer = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  max-width: 21.5rem;
  position: relative;

  &:hover {
    .card-background {
      transform: translate(-50%, -50%) scale(1.02);
    }
    .card-frame--background {
      transform: translate(-49%, -51%) scale(1.02);
    }
    .card-frame--border {
      transform: translate(-51%, -49%);
    }

    .card-image svg {
      transform: translate(0.125rem, -0.125rem);
    }
  }

  .card-background {
    background-color: ${({ theme }) => theme.color.backgroundPrimary};
    border-radius: 2.5rem;
    position: absolute;
    width: calc(100% - 1.75rem);
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease-out;
    z-index: 80;
  }

  .card-image {
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

  .card-text {
    text-align: left;
    position: relative;
    z-index: 100;
    h2 {
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
  }

  .card-frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: auto;
    transition: transform 0.2s ease-out;

    &--background {
      z-index: 10;
    }

    &--border {
      z-index: 100;
    }
  }
`;
