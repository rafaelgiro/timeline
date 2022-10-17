import styled from "@emotion/styled";

export const TimelineHeaderContainer = styled.div`
  display: none;

  @media ${({ theme }) => theme.screens.lg} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ScrollButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  padding: 1rem 1.5rem;
  margin-left: 0.5rem;
  transition: opacity 0.2s ease-out;

  &.forward {
    svg {
      transition: transform 0.2s ease-out;
    }

    &:hover svg {
      transform: translateX(0.25rem);
    }
  }

  &.backward {
    svg {
      transform: translateX(0) scale(-1, 1);
      transition: transform 0.2s ease-out;
    }

    &:hover svg {
      transform: translateX(-0.25rem) scale(-1, 1);
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;
