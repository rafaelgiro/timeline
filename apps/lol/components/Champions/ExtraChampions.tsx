import { Typography } from "../Typography";
import { ExtraChampionsContainer } from "./styles";

/**
 * Number of extra champions in list.
 *
 * @example
 * ```
 * <ExtraChampions number={2} />
 * ```
 */
export const ExtraChampions = (props: ExtraChampionsProps) => {
  const { number } = props;
  return (
    <ExtraChampionsContainer>
      <Typography htmlTag="strong">+{number}</Typography>
    </ExtraChampionsContainer>
  );
};

interface ExtraChampionsProps {
  /**
   * Number of extra champions in list.
   */
  number: number;
}
