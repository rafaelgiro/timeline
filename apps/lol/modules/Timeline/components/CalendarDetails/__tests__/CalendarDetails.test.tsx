import { describe, it } from "vitest";
import { render, screen } from "~/test-utils";
import { data as mockData } from "../../../../../../vitest/mocks";
import { CalendarDetails } from "../CalendarDetails";

describe("<CalendarDetails />", () => {
  it("has a date spn", () => {
    render(<CalendarDetails category="udyr" {...mockData.udyr} />);

    const cardDate = screen.getByRole("heading", { name: "13/9 até 20/9" });

    expect(cardDate).toBeVisible();
  });

  it("has a title", () => {
    render(<CalendarDetails category="udyr" {...mockData.udyr} />);

    const cardTitle = screen.getByRole("heading", { name: "UDYR" });

    expect(cardTitle).toBeVisible();
  });

  it("has a description", () => {
    render(<CalendarDetails category="udyr" {...mockData.udyr} />);

    const cardDescription = screen.getByText(
      "The Udyr champion update is now testing on the PBE!"
    );

    expect(cardDescription).toBeVisible();
  });

  it("has an featured image", () => {
    render(<CalendarDetails category="udyr" {...mockData.udyr} />);

    const cardImage = screen.getByRole("img", {
      name: "Definitely not Udyr splash art with Udyr taking a selfie",
    });

    expect(cardImage).toBeVisible();
  });

  it("has a view more text", () => {
    render(<CalendarDetails category="changes" {...mockData.changes} />);

    const cardDate = screen.getByText("Clique para ir ao link original");

    expect(cardDate).toBeVisible();
  });
});
