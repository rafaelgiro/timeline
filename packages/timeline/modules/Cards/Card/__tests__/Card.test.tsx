import { vi, describe, it } from "vitest";
import { screen, render } from "../../../../test-utils";
import userEvent from "@testing-library/user-event";
import { data as mockData } from "../../../../vitest/mocks";

import { Card } from "../Card";

describe("<Card />", () => {
  describe("General Card Component", () => {
    it("renders a Event Card when the event has a `subEvents` property", () => {
      render(
        <Card category="udyr" {...mockData.udyr} onEventClick={vi.fn()} />
      );

      const eventCard = screen.getByTestId("event-card");

      expect(eventCard).toBeVisible();
    });

    it("renders a External Card when the event has a `url` property", () => {
      render(
        <Card
          category="udyr"
          {...mockData.udyr.subEvents![0]}
          onEventClick={vi.fn()}
        />
      );

      const eventCard = screen.getByTestId("external-card");

      expect(eventCard).toBeVisible();
    });

    it("has a title", () => {
      render(
        <Card category="udyr" {...mockData.udyr} onEventClick={vi.fn()} />
      );

      const cardTitle = screen.getByRole("heading", { name: "UDYR" });

      expect(cardTitle).toBeVisible();
    });

    it("has a description", () => {
      render(
        <Card category="udyr" {...mockData.udyr} onEventClick={vi.fn()} />
      );

      const cardDescription = screen.getByText(
        "The Udyr champion update is now testing on the PBE!"
      );

      expect(cardDescription).toBeVisible();
    });

    it("has an featured image", () => {
      render(
        <Card category="udyr" {...mockData.udyr} onEventClick={vi.fn()} />
      );

      const cardImage = screen.getByRole("img", {
        name: "Definitely not Udyr splash art with Udyr taking a selfie",
      });

      expect(cardImage).toBeVisible();
    });
  });

  describe("<ExternalCard />", () => {
    it("has a external url", () => {
      render(
        <Card
          category="udyr"
          {...mockData.udyr.subEvents![0]}
          onEventClick={vi.fn()}
        />
      );

      const card = screen.getByRole("link", {
        name: /Gameplay trailer/gi,
      });

      expect(card).toHaveAttribute(
        "href",
        "https://www.youtube.com/watch?v=kfyDoF658HA"
      );
    });
  });

  describe("<EventCard />", () => {
    it("runs the `onEventClick` function when clicked", async () => {
      const user = userEvent.setup();
      const onEventClick = vi.fn();
      render(
        <Card category="udyr" {...mockData.udyr} onEventClick={onEventClick} />
      );

      const card = screen.getByRole("button", {
        name: /Udyr/gi,
      });
      await user.click(card);
      expect(onEventClick).toHaveBeenCalledWith("udyr");
    });
  });
});
