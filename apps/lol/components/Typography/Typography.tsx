import clsx from "clsx";
import { forwardRef } from "react";
import { TextContainer } from "./styles";

/**
 * Component that displays text based on a typographic scale.
 *
 * @example
 * ```
 * <Typography htmlTag="h2" variant="heading">
 * ```
 */
export const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  (props: TypographyProps, ref) => {
    const {
      variant = "paragraph",
      htmlTag = "span",
      className,
      isDisabled = false,
    } = props;

    return (
      <TextContainer
        ref={ref}
        as={htmlTag}
        variant={variant}
        className={clsx(
          "typography",
          variant,
          className,
          isDisabled && "disabled"
        )}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML Component wich will be rendered on the DOM
   */
  htmlTag?: keyof JSX.IntrinsicElements;
  /**
   * Font type style to render
   */
  variant?: "paragraph" | "heading" | "subtitle";
  /**
   * Text content of the component
   */
  children: React.ReactNode;
  /**
   * If true, the text will have a different color.
   */
  isDisabled?: boolean;
}
