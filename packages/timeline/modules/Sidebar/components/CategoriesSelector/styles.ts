import styled from "@emotion/styled";

export const CategoriesSelectorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${({ theme }) => theme.screens.lg} {
    align-items: flex-start;
    text-align: left;
  }

  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;

    @media ${({ theme }) => theme.screens.lg} {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 1.5rem;
    }
  }

  .checkbox {
    margin-top: 1rem;

    @media ${({ theme }) => theme.screens.lg} {
      margin-top: 0;

      &:not(:first-of-type) {
        margin-top: 0.75rem;
      }
    }
  }

  .time-window-selector {
    margin-top: 0.5rem;
    @media ${({ theme }) => theme.screens.lg} {
      display: none;
    }
  }
`;
