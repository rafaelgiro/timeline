import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IconContainerProps } from "./GameIcons";

export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    background-color: ${({ theme }) => theme.color.backgroundPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    transform: scale(0.8);
  }
`;

export const GameIconContainer = styled.svg<IconContainerProps>`
  padding: 1rem;

  path {
    transition: all 0.2s ease-out;
    fill: #ffffff;
    stroke: #ffffff;
  }

  ${({ isActive, accentColor }) =>
    isActive &&
    css`
      path {
        fill: ${accentColor} !important;
        stroke: ${accentColor} !important;
      }
    `}

  &:hover {
    cursor: pointer;

    path {
      stroke: ${({ accentColor }) => accentColor};
      fill: transparent;
    }

    .lor-title {
      stroke: ${({ accentColor }) => accentColor} !important;
    }
  }

  .lor-title {
    stroke: ${({ theme }) => theme.color.backgroundPrimary} !important;
  }
`;
