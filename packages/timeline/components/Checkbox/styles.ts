import styled from "@emotion/styled";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    strong {
      opacity: 0.8;
    }
  }

  svg {
    margin-right: 0.75rem;
  }

  strong {
    transition: opacity 0.2s ease-out;
  }

  input {
    opacity: 0;
    visibility: hidden;
  }

  .background {
    opacity: 0;

    &--checked {
      opacity: 1;
    }
  }
`;
