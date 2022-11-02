import styled from "@emotion/styled";

export const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 1rem 0;

  @media ${({ theme }) => theme.screens.lg} {
    height: calc(100% - 2rem);
  }
`;
