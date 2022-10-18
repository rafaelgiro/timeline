import { createContext } from "react";
import { TabGroupContainer } from "./styles";

/**
 * Tab wrapper component. Makes that only one tab can be selected at a time.
 *
 * @example
 * ```
 * const [selectedTab, setSelectedTab] = useState("im-a-tab");
 *
 * function handleChange(event: React.SyntheticEvent, newValue: string) {
 *  setSelectedTab(newValue);
 * }
 *
 * <TabGroup
 *  onChange={handleChange}
 *  currentlySelected="im-a-tab"
 *  aria-label="example tab group"
 * >
 *   <Tab value="im-a-tab">I'm a tab!</Tab>
 *   <Tab value="im-another-tab">I'm another tab!</Tab>
 * </TabGroup>
 * ```
 */
export const TabGroup = (props: TabGroupProps) => {
  const {
    children,
    onChange,
    currentlySelected,
    priority = "primary",
    ...other
  } = props;
  return (
    <TabContext.Provider value={{ onChange, currentlySelected, priority }}>
      <TabGroupContainer role="tablist" {...other}>
        {children}
      </TabGroupContainer>
    </TabContext.Provider>
  );
};

export const TabContext = createContext<TabContextProps>({
  onChange: () => null,
  currentlySelected: "",
  priority: "primary",
});

interface TabGroupProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  /**
   * Function that will be called when a tab is clicked.
   */
  onChange: (e: React.SyntheticEvent, newValue: string) => void;
  /**
   * Value of the currently selected tab.
   */
  currentlySelected: string;
  /**
   * <Tab /> components that will be rendered inside the group.
   */
  children: React.ReactNode;
  /**
   * Indicates the background color of the tab group.
   */
  priority?: "primary" | "secondary";
}

interface TabContextProps {
  /**
   * Function that will be called when a tab is clicked.
   */
  onChange: TabGroupProps["onChange"];
  /**
   * Value of the currently selected tab.
   */
  currentlySelected: TabGroupProps["currentlySelected"];
  /**
   * Indicates the background color of the tab group.
   */
  priority: NonNullable<TabGroupProps["priority"]>;
}
