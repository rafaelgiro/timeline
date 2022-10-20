import styled from "@emotion/styled";

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-bottom: 1rem;

  @media ${({ theme }) => theme.screens.lg} {
    height: calc(100% - 2rem);
    padding: 1rem 0;
  }
`;
