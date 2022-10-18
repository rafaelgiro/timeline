import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { CalendarEvent } from "../CalendarEvent";
import { screen, render } from "../../../../../test-utils";
import { data as mockData } from "../../../../../vitest/mocks";

describe("<CalendarEvent />", () => {
  describe("General CalendarEvent Component", () => {
    it("renders the event title", async () => {
      render(
        <CalendarEvent
          firstDate={new Date()}
          category="udyr"
          {...mockData.udyr}
          onEventClick={vi.fn()}
        />
      );

      const title = await screen.findByRole("heading", { name: "Udyr" });
      expect(title).toBeVisible();
    });

    it("renders champion's portraits", async () => {
      render(
        <CalendarEvent
          firstDate={new Date()}
          category="udyr"
          {...mockData.udyr}
          onEventClick={vi.fn()}
        />
      );

      const championPortrait = await screen.findAllByAltText("Udyr");
      expect(championPortrait).toHaveLength(2);
    });

    it("renders a small frame for events that are less than 3 days long", async () => {
      render(
        <CalendarEvent
          firstDate={new Date()}
          category="patch1219"
          {...mockData.patch1219}
          onEventClick={vi.fn()}
        />
      );

      const frame = await screen.findByTestId("small-frame");
      expect(frame).toBeVisible();
    });

    it("renders a medium frame for events that are less than 14 days long", async () => {
      render(
        <CalendarEvent
          firstDate={new Date()}
          category="udyr"
          {...mockData.udyr}
          onEventClick={vi.fn()}
        />
      );

      const frame = await screen.findByTestId("medium-frame");
      expect(frame).toBeVisible();
    });

    it("renders a large frame for events that are more than 8 days long", async () => {
      render(
        <CalendarEvent
          firstDate={new Date()}
          category="changes"
          {...mockData.changes}
          onEventClick={vi.fn()}
        />
      );

      const frame = await screen.findByTestId("large-frame");
      expect(frame).toBeVisible();
    });

    // Maybe, will see how it looks on screen
    // it("renders a gigant frame for events that are more than 14 days long", () => {});
  });

  describe("<CalendarExtenalEvent />", () => {
    it("has a external url", async () => {
      render(
        <CalendarEvent
          firstDate={new Date()}
          category="udyr"
          {...mockData.udyr.subEvents![0]}
          onEventClick={vi.fn()}
        />
      );

      const calendarEvent = await screen.findByRole("link", {
        name: /Gameplay trailer/gi,
      });

      expect(calendarEvent).toHaveAttribute(
        "href",
        "https://www.youtube.com/watch?v=kfyDoF658HA"
      );
    });
  });

  describe("<CalendarFilterEvent />", () => {
    it("runs the `onEventClick` handler when clicking on the event", async () => {
      const user = userEvent.setup();
      const onEventClick = vi.fn();
      render(
        <CalendarEvent
          firstDate={new Date()}
          category="udyr"
          {...mockData.udyr}
          onEventClick={onEventClick}
        />
      );

      const calendarEvent = await screen.findByRole("button", {
        name: /Udyr/gi,
      });
      await user.click(calendarEvent);
      expect(onEventClick).toHaveBeenCalledWith("udyr");
    });
  });
});
