import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, render } from "../../../test-utils";

import { TabGroup, TabContext } from "../TabGroup";
import { Tab } from "../Tab";

describe("Tab", () => {
  describe("<Tab />", () => {
    it("renders a title", () => {
      render(
        <TabContext.Provider
          value={{
            onChange: vi.fn(),
            currentlySelected: "im-a-tab",
            priority: "primary",
          }}
        >
          <Tab value="im-a-tab">I&apos;m a tab!</Tab>
        </TabContext.Provider>
      );

      const tab = screen.getByRole("tab", { name: "I'm a tab!" });
      expect(tab).toBeVisible();
    });

    it("runs a function when clicked", async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();
      render(
        <TabContext.Provider
          value={{
            onChange,
            currentlySelected: "im-a-tab",
            priority: "primary",
          }}
        >
          <Tab value="im-a-tab">I&apos;m a tab!</Tab>
        </TabContext.Provider>
      );

      const tab = screen.getByRole("tab", { name: "I'm a tab!" });
      await user.click(tab);

      expect(onChange).toHaveBeenCalled();
    });

    it("is currently selected", () => {
      render(
        <TabContext.Provider
          value={{
            onChange: vi.fn(),
            currentlySelected: "im-a-tab",
            priority: "primary",
          }}
        >
          <Tab value="im-a-tab">I&apos;m a tab!</Tab>
        </TabContext.Provider>
      );

      const tab = screen.getByRole("tab", {
        selected: true,
      });
      expect(tab).toHaveAccessibleName("I'm a tab!");
    });

    it("is currently not selected", () => {
      render(
        <TabContext.Provider
          value={{
            onChange: vi.fn(),
            currentlySelected: "im-another-tab",
            priority: "primary",
          }}
        >
          <Tab value="im-a-tab">I&apos;m a tab!</Tab>
        </TabContext.Provider>
      );

      const tab = screen.getByRole("tab", {
        name: "I'm a tab!",
        selected: false,
      });
      expect(tab).toBeVisible();
    });

    it("is currently disabled", async () => {
      const onChange = vi.fn();
      const user = userEvent.setup();
      render(
        <TabContext.Provider
          value={{
            onChange,
            currentlySelected: "im-a-tab",
            priority: "primary",
          }}
        >
          <Tab value="im-a-tab" isDisabled>
            I&apos;m a tab!
          </Tab>
        </TabContext.Provider>
      );

      const tab = screen.getByRole("tab", {
        name: "I'm a tab!",
      });
      user.click(tab);

      expect(onChange).not.toBeCalled();
    });
  });

  describe("<TabGroup />", () => {
    it("renders as an acessible tablist", () => {
      render(
        <TabGroup
          onChange={vi.fn()}
          currentlySelected="im-a-tab"
          aria-label="testing tab group"
        >
          <Tab value="im-a-tab">I&apos;m a tab!</Tab>
          <Tab value="im-another-tab">I&apos;m another tab!</Tab>
        </TabGroup>
      );

      const tabGroup = screen.getByRole("tablist", {
        name: "testing tab group",
      });
      expect(tabGroup).toBeVisible();
    });

    it("renders multiple tabs", () => {
      render(
        <TabGroup onChange={vi.fn()} currentlySelected="im-a-tab">
          <Tab value="im-a-tab">I&apos;m a tab!</Tab>
          <Tab value="im-another-tab">I&apos;m another tab!</Tab>
        </TabGroup>
      );

      const tabs = screen.getAllByRole("tab");
      expect(tabs).toHaveLength(2);
    });

    it("runs selects only one tab at a time", () => {
      render(
        <TabGroup onChange={vi.fn()} currentlySelected="im-a-tab">
          <Tab value="im-a-tab">I&apos;m a tab!</Tab>
          <Tab value="im-another-tab">I&apos;m another tab!</Tab>
        </TabGroup>
      );

      const selectedTab = screen.getByRole("tab", { selected: true });
      expect(selectedTab).toHaveTextContent("I'm a tab!");
    });

    it("has only one active tab selector", () => {
      render(
        <TabGroup onChange={vi.fn()} currentlySelected="im-a-tab">
          <Tab value="im-a-tab">I&apos;m a tab!</Tab>
          <Tab value="im-another-tab">I&apos;m another tab!</Tab>
        </TabGroup>
      );

      const tabSelector = screen.getByTestId("active-tab-indicator");
      expect(tabSelector).toBeVisible();
    });
  });
});
