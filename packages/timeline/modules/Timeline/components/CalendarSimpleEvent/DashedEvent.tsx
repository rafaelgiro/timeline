import { useTheme } from "@emotion/react";

export const DashedEvent = (props: DashedEventProps) => {
  const { borderCategory } = props;

  const theme = useTheme();

  return (
    <svg height="8" width="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 5.64C887.86 5.92 4432.96 2.56 5317.28 2"
        stroke={theme.color[borderCategory]}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="16 20"
      />
    </svg>
  );
};

interface DashedEventProps {
  /**
   * Color category for event's border
   */
  borderCategory: Category;
}
