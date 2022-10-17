import { useTheme } from "@emotion/react";
import { ScrollButtonContainer } from "./styles";

export const ScrollButton = (props: ScrollButtonProps) => {
  const { direction, onClick } = props;
  const theme = useTheme();

  return (
    <ScrollButtonContainer
      onClick={() => onClick(direction)}
      className={direction}
    >
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.42003 1.70001C7.28003 6.56001 6.50003 9.98001 12.28 13.2M3.40003 4.46001C4.60003 6.10001 5.80003 8.58001 10.26 15.08M7.84003 14.4C6.88003 17.66 4.82003 16.26 1.00003 21M10.96 14.28C7.58003 16.52 5.06003 19.38 2.44003 20.76"
          stroke={theme.color.highlight}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </ScrollButtonContainer>
  );
};

interface ScrollButtonProps {
  direction: "forward" | "backward";
  onClick(direction: "forward" | "backward"): void;
}
