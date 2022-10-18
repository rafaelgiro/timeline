import styled from "@emotion/styled";

export const ChampionContainer = styled.img`
  border-radius: 50%;
  border: 2px solid #000;
  width: 2rem;
  height: 2rem;
`;

export const ChampionGroupContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  img {
    display: inline-block;
    margin-left: -1rem;
    transition: margin-left 0.2s ease-out;
  }
`;

export const ExtraChampionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-left: -0.75rem;
  border: 2px solid #000;
  transition: margin-left 0.2s ease-out;
`;
