import { describe, it } from "vitest";
import { render, screen } from "../../../test-utils";

import { Typography, type TypographyProps } from "../Typography";

describe("<Typography />", () => {
  it("renders a <span /> as default htmlTag", () => {
    render(<Typography>Span test</Typography>);
    const text = screen.getByText("Span test");

    expect(text).toBeVisible();
  });

  [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "blockquote",
    "strong",
    "em",
    "b",
  ].forEach((tag) => {
    it(`should render a visible ${tag} with text content`, () => {
      render(
        <Typography htmlTag={tag as TypographyProps["htmlTag"]}>
          HTMLTag test
        </Typography>
      );
      const text = screen.getByText("HTMLTag test");

      expect(text).toBeVisible();
    });
  });

  ["heading", "paragraph"].forEach((variant) => {
    it(`should render a ${variant} as className`, () => {
      render(
        <Typography variant={variant as TypographyProps["variant"]}>
          Variant test
        </Typography>
      );
      const text = screen.getByText("Variant test");

      expect(text).toHaveClass(variant);
    });
  });
});
