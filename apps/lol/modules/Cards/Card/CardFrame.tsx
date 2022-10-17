import { useTheme } from "@emotion/react";
import { useMemo } from "react";
import { getRandomBackground, getRandomCardFrame } from "./helpers";

/**
 * Card frame component to create drawing effect
 * on the card and paint with his category color.
 */
export const CardFrame = (props: CardFrameProps) => {
  const { borderCategory, backgroundCategory } = props;
  const theme = useTheme();

  const background = useMemo(getRandomBackground, []);
  const frame = useMemo(getRandomCardFrame, []);

  return (
    <>
      <svg
        className="card-frame card-frame--background"
        viewBox="0 0 350 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={background} fill={theme.color[backgroundCategory]} />
      </svg>
      <svg
        className="card-frame card-frame--border"
        viewBox="0 0 350 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={frame}
          stroke={theme.color[borderCategory]}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

interface CardFrameProps {
  /**
   * Color category for event's border
   */
  borderCategory: Category;
  /**
   * Color category for event's background
   */
  backgroundCategory: Category;
}
