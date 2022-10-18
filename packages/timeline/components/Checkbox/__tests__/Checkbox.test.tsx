import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { screen, render } from "../../../test-utils";
import { Checkbox } from "../Checkbox";

describe("<Checkbox />", () => {
  it("renders input `unchecked` as default", () => {
    render(<Checkbox label="Checkbox test" />);

    const checkbox = screen.getByLabelText("Checkbox test");
    expect(checkbox).not.toBeChecked();
  });

  it("renders the input `checked` em `checked={true}`", () => {
    render(<Checkbox label="Checkbox test" checked />);

    const checkbox = screen.getByLabelText("Checkbox test");
    expect(checkbox).toBeChecked();
  });

  it("runs the `onChange` function", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label="Checkbox test" onClick={onChange} />);

    const checkbox = screen.getByLabelText("Checkbox test");
    await user.click(checkbox);

    expect(onChange).toBeCalled();
  });
});
