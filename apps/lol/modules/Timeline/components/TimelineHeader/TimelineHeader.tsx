import { useState } from "react";
import { Tab, TabGroup } from "../../../../components/Tab";
import { ScrollButton } from "./ScrollButton";
import { TimelineHeaderContainer } from "./styles";

/**
 * Wrapper of components that interact with the timeline interval.
 */
export const TimelineHeader = (props: TimelineHeaderProps) => {
  const { handleScroll } = props;
  const [selectedTab, setSelectedTab] = useState("normal-calendar");

  function handleTabChange(event: React.SyntheticEvent, newValue: string) {
    setSelectedTab(newValue);
  }

  return (
    <TimelineHeaderContainer>
      <TabGroup currentlySelected={selectedTab} onChange={handleTabChange}>
        <Tab value="normal-calendar" isDisabled>
          Calendário
        </Tab>
        <Tab value="current-patch" isDisabled>
          Atualização 19.20
        </Tab>
      </TabGroup>
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
