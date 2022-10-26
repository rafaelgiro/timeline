import { GameSelector } from "../GameSelector";
import { ScrollButton } from "./ScrollButton";
import { TimelineHeaderContainer } from "./styles";

/**
 * Wrapper of components that interact with the timeline interval.
 */
export const TimelineHeader = (props: TimelineHeaderProps) => {
  const { handleScroll } = props;

  return (
    <TimelineHeaderContainer>
      <GameSelector />
      <div>
        <ScrollButton direction="backward" onClick={handleScroll} />
        <ScrollButton direction="forward" onClick={handleScroll} />
      </div>
    </TimelineHeaderContainer>
  );
};

interface TimelineHeaderProps {
  handleScroll(direction: "forward" | "backward"): void;
}
