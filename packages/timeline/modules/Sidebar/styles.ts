import styled from "@emotion/styled";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  grid-column: 1/13;
  grid-row: 3/4;

  .logo {
    display: none;
  }

  @media ${({ theme }) => theme.screens.lg} {
    grid-column: 1/13;
    grid-row: 1/3;
    align-items: flex-start;
    padding: 0 0 0 2rem;
    margin-bottom: 0;

    .logo {
      display: block;
    }
  }
`;
