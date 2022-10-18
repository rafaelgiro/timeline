import { useTheme } from "@emotion/react";
import { BackgroundContainer } from "./styles";

/**
 * Timeline's grey background.
 */
export const Background = () => {
  const theme = useTheme();
  return (
    <BackgroundContainer>
      <svg
        viewBox="0 0 1198 686"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.2294 16.1553L1227.45 0L1232.7 679.547L10.7497 686"
          fill={theme.color.backgroundSecondary}
        />
        <path
          d="M5.67409 6.54224C470.331 12.5504 930.816 10.0136 1235.66 5.89692M6.623 6.69801C401.038 5.22934 798.123 3.60491 1232.97 7.61036M1228.99 3.38239C1228.62 172.079 1229.63 332.742 1231.2 672.359M1232.86 8.16667C1240.67 242.04 1243.14 477.628 1234.82 679.146M1235.77 678.79C888.468 674.607 539.248 669.934 7.66018 678.145M1233.72 676.209C823.943 682.929 416.772 681.794 9.11664 675.742M13.7288 681.438C15.4721 535.862 9.58006 390.442 11.2351 4.406M4.85759 674.896C1.76812 532.591 -2.97643 383.077 7.10849 5.36286"
          stroke={theme.color.backgroundSecondary}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </BackgroundContainer>
  );
};
