import { ChampionContainer } from "./styles";

/**
 * Champion's portrait.
 *
 * @example
 * ```
 * <Champion champion={{championId: "ChoGath", name: "Cho'Gath"}} />
 * ```
 */
export const Champion = (props: ChampionProps) => {
  const { champion } = props;
  const { championId, name } = champion;

  return (
    <ChampionContainer
      src={`https://assets.5pots.com/file/cincopots/champions/${championId}.png`}
      alt={name}
      data-testid="champion-portrait"
    />
  );
};

interface ChampionProps {
  /**
   * Champion's name and Id that comes from data dragon.
   */
  champion: Champion;
}
