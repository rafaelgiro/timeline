import { forwardRef } from "react";
import { Champion } from "./Champion";
import { ExtraChampions } from "./ExtraChampions";
import { ChampionGroupContainer } from "./styles";

/**
 * A group of champions' portraits.
 *
 * @example
 * ```
 * <Champions
 *   champions={[
 *     { name: "Kai'Sa", championId: "KaiSa" },
 *     { name: "Vel'Koz", championId: "Velkoz" },
 *     { name: "Sion", championId: "Sion" },
 *     { name: "Ivern", championId: "Ivern" },
 *     { name: "Cho'Gath", championId: "ChoGath" },
 *     { name: "Aurelion Sol", championId: "AurelionSol" },
 *   ]}
 * />
 * ```
 */
export const Champions = forwardRef<HTMLDivElement, ChampionsProps>(
  (props: ChampionsProps, ref) => {
    const { champions, limit = 4, ...other } = props;
    const championsToDisplay = limit ? champions.slice(0, limit) : champions;
    const extraChampionsLength = champions.length - championsToDisplay.length;

    return (
      <ChampionGroupContainer className="champions-group" {...other} ref={ref}>
        {extraChampionsLength > 0 && (
          <ExtraChampions number={extraChampionsLength} />
        )}
        {championsToDisplay.map((champ) => (
          <Champion key={champ.championId} champion={champ} />
        ))}
      </ChampionGroupContainer>
    );
  }
);

Champions.displayName = "Champions";

interface ChampionsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Array of champions' names and Ids that comes from data dragon.
   */
  champions: Champion[];
  /**
   * Number of champions to display.
   * @default 4
   */
  limit?: number;
}
