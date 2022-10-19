import { useTheme } from "@emotion/react";

export const DottedEvent = (props: DottedEventProps) => {
  const { borderCategory } = props;
  const theme = useTheme();

  return (
    <svg
      height="10"
      width="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6.64C888.86 6.92 4433.96 3.56 5318.28 3"
        stroke={theme.color[borderCategory]}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="3 16"
      />
    </svg>
  );
};

interface DottedEventProps {
  /**
   * Color category for event's border
   */
  borderCategory: Category;
}
