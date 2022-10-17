import styled from "@emotion/styled";

export const SocialContainer = styled.section`
  display: flex;

  @media ${({ theme }) => theme.screens.lg} {
    flex-direction: column;
    margin-top: 2rem;
  }

  .social {
    display: flex;
    align-items: center;

    p {
      margin-left: 1rem;
      max-width: 9rem;
    }

    svg {
      width: 2rem;
    }
  }
`;
