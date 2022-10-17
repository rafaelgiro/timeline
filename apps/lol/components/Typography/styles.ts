import styled from "@emotion/styled";

export const TextContainer = styled.div`
  color: ${(props) => `${props.theme.color.fontPrimary}`};

  &.paragraph {
    font-size: 1rem;
  }

  &.subtitle {
    font-size: 0.75rem;
  }

  &.heading {
    font-size: 1.25rem;
  }

  &.disabled {
    color: ${(props) => `${props.theme.color.backgroundSecondary}`};
  }
`;
