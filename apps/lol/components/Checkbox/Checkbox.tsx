import { useTheme } from "@emotion/react";
import clsx from "clsx";
import { useMemo } from "react";
import { Typography } from "../Typography";
import { getRandomCheckboxBackground, getRandomCheckboxFrame } from "./helpers";
import { CheckboxContainer } from "./styles";

/**
 * Component that returns a correspondent boolean based on
 * user's action.
 *
 * @example
 * ```
 * <Checkbox label="hi from ts-doc!">
 * ```
 */
export const Checkbox = (props: CheckboxProps) => {
  const {
    label,
    category = "rumor",
    checked,
    id,
    isDisabled = false,
    ...other
  } = props;
  const theme = useTheme();

  const background = useMemo(getRandomCheckboxBackground, []);
  const frame = useMemo(getRandomCheckboxFrame, []);

  return (
    <CheckboxContainer className="checkbox" htmlFor={id}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={background}
          className={clsx("background", checked && "background--checked")}
          fill={theme.color[category]}
        />
        <path
          d={frame}
          stroke={theme.color[category]}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <Typography htmlTag="strong">{label}</Typography>
      <input
        data-testid="teste"
        type="checkbox"
        defaultChecked={checked}
        disabled={isDisabled}
        {...other}
      />
    </CheckboxContainer>
  );
};

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label identifying the component.
   * This will show right next to the checkbox.
   */
  label: string;
  /**
   * Category that defines the checkbox color
   */
  category?: Category;
  /**
   * If true, the checkbox can't be changed
   * and will be rendered as greyed out.
   */
  isDisabled?: boolean;
}
