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
    margin: 1rem 0;

    @media ${({ theme }) => theme.screens.lg} {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 1.5rem;
      margin-bottom: 0;
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
`;
