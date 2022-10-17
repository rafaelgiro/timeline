import { describe, it, vi } from "vitest";
import { screen, render } from "~/test-utils";
import { Calendar } from "../Calendar";
import { Day } from "../Day";

import { data as mockData } from "../../../../../../vitest/mocks";

describe("Calendar", () => {
  describe("<Day />", () => {
    it("should render the weekday followed by a number", () => {
      render(<Day day={new Date("2022-09-23T00:00:00.000")} />);

      const day = screen.getByText("F 23");
      expect(day).toBeInTheDocument();
    });

    it("should be highlighted", () => {
      const scrollIntoViewMock = vi.fn();
      HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

      render(<Day day={new Date("2022-09-23T00:00:00.000")} isHighlighted />);

      const day = screen.getByRole("listitem");
      expect(day).toHaveAttribute("aria-current", "date");
    });

    // Skip because I'm currently unsure about the design
    it.skip("should renders the month name", () => {
      render(
        <Day
          day={new Date("2022-09-01T00:00:00.000")}
          shouldRenderTheMonthName
        />
      );

      const monthName = screen.getByText("September");
      expect(monthName).toBeInTheDocument();
    });
  });

  describe("<Calendar />", () => {
    it("should render one day for each day on range", () => {
      const from = new Date("2022-09-12T00:00:00.000");
      const to = new Date("2022-09-22T00:00:00.000");

      render(<Calendar data={mockData} from={from} to={to} />);

      const days = screen.getAllByRole("listitem");
      expect(days).toHaveLength(11);
    });

    // Skip because I'm currently unsure about the design
    it.skip("should render month name on the first item", () => {
      const from = new Date("2022-09-12T00:00:00.000");
      const to = new Date("2022-09-22T00:00:00.000");

      render(<Calendar data={mockData} from={from} to={to} />);

      const monthName = screen.getByText("September");
      expect(monthName).toBeInTheDocument();
    });

    // Skip because I'm currently unsure about the design
    it.skip("should render month name on a new month", () => {
      const from = new Date("2022-09-28T00:00:00.000");
      const to = new Date("2022-10-02T00:00:00.000");

      render(<Calendar data={mockData} from={from} to={to} />);

      const monthName = screen.getByText("October");
      expect(monthName).toBeInTheDocument();
    });
  });
});
