import { useContext } from "react";
import { Typography } from "../Typography";
import { TabContainer } from "./styles";
import { TabContext } from "./TabGroup";
import { TabIndicator } from "./TabIndicator";

/**
 * Tab component. Renders a tab that can be selected.
 *
 * @remarks
 * This component is used inside a {@link TabGroup} component.
 *
 * @example
 * ```
 * <Tab value="im-a-tab">I'm a tab!</Tab>
 * ```
 */
export const Tab = (props: TabProps) => {
  const { children, value, isDisabled = false } = props;
  const { onChange, currentlySelected, priority } = useContext(TabContext);
  const isActive = currentlySelected === value;

  return (
    <TabContainer
      role="tab"
      aria-selected={isActive}
      onClick={!isDisabled ? (e) => onChange(e, value) : undefined}
      priotity={priority}
    >
      <Typography variant="paragraph" isDisabled={isDisabled}>
        {children}
      </Typography>
      {isActive && <TabIndicator isDisabled={isDisabled} />}
    </TabContainer>
  );
};

interface TabProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Title that will be displayed on the tab.
   */
  children: string;
  /**
   * Tab value that will be returned on the `onChange` function.
   */
  value: string;
  /**
   * If true, the tab wont run the `onChange` function.
   */
  isDisabled?: boolean;
}
