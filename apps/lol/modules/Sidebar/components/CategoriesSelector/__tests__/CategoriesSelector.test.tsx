import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";
import { screen, render } from "../../../../../test-utils";

import {
  CategoriesSelector,
  type CategoriesSelectorProps,
} from "../CategoriesSelector";

describe("<CategoriesSelector>", () => {
  const categories: CategoriesSelectorProps["categories"] = [
    { label: "PBE", value: "pbe" },
    { label: "Notas de atualização", value: "release" },
    { label: "Campeões", value: "champions" },
  ];

  it("renders all categories unchecked", () => {
    render(
      <CategoriesSelector
        categories={categories}
        handleCategoryClick={vi.fn()}
        selectedCategories={[]}
      />
    );

    const checkedCheckbox = screen.getAllByRole("checkbox", { checked: false });
    expect(checkedCheckbox).toHaveLength(3);
  });

  it("renders only one checkbox on checked state", () => {
    render(
      <CategoriesSelector
        categories={categories}
        handleCategoryClick={vi.fn()}
        selectedCategories={["pbe"]}
      />
    );

    const checkedCheckbox = screen.getByRole("checkbox", {
      checked: true,
      name: "PBE",
    });
    expect(checkedCheckbox).toBeInTheDocument();
  });

  // Currently disabled for first release
  it.skip("returns the checkbox value when clicked", async () => {
    const user = userEvent.setup();

    const onClick = vi.fn((val) => val);
    render(
      <CategoriesSelector
        categories={categories}
        handleCategoryClick={onClick}
        selectedCategories={[]}
      />
    );

    const releaseCheckbox = screen.getByRole("checkbox", {
      name: "Notas de atualização",
    });
    await user.click(releaseCheckbox);

    expect(onClick).toBeCalled();
  });
});
