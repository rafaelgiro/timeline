import styled from "@emotion/styled";

export const SimpleEventTitle = styled.div`
  position: relative;
  width: 100%;
  margin-left: 0.5rem;
  margin-top: -1.25rem;

  strong {
    background-color: ${({ theme }) => theme.color.backgroundSecondary};
    width: 100%;
    position: sticky;
    left: 0;
    padding: 0.5rem 1rem;
  }
`;
