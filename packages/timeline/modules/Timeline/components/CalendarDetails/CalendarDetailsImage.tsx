import { useTheme } from "@emotion/react";
import { type CalendarDetailsProps } from "./CalendarDetails";

/**
 * CalendarDetails featured image with a drawn frame.
 */
export const CalendarDetailsImage = (props: CalendarDetailsImageProps) => {
  const { image, borderCategory } = props;
  const theme = useTheme();

  return (
    <div className="event-details__img">
      <img width="100%" alt={image.alt} src={image.url} />
      <svg viewBox="0 0 107 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.8126 2.61391C37.8987 0.752027 50.338 3.83613 77.9693 2.61391M27.8126 2.61391C42.8904 3.11651 52.7824 4.86417 77.9693 2.61391M77.9693 2.61391C92.9443 -0.367389 103.522 9.34183 103.042 27.698M77.9693 2.61391C98.4957 5.83509 103.042 11.021 103.042 27.698M103.042 27.698C106.811 37.2359 101.843 52.6907 103.042 77.8547M103.042 27.698C105.098 44.7976 105.167 67.3916 103.042 77.8547M103.042 77.8547C101.808 92.6241 99.044 98.8152 77.9693 102.927M103.042 77.8547C102.836 94.5431 93.6525 105.772 77.9693 102.927M77.9693 102.927C61.3265 105.337 49.3214 99.5348 27.8126 102.927M77.9693 102.927C62.5145 101.499 48.2933 102.984 27.8126 102.927M27.8126 102.927C9.3422 102.025 0.489675 98.3583 2.72851 77.8547M27.8126 102.927C15.5218 100.791 7.09195 90.7851 2.72851 77.8547M2.72851 77.8547C-0.332753 62.6626 7.72019 55.6034 2.72851 27.698M2.72851 77.8547C0.740973 66.0665 3.53951 54.8038 2.72851 27.698M2.72851 27.698C-0.584051 6.52045 7.74304 6.62325 27.8126 2.61391M2.72851 27.698C4.01926 14.3221 6.95487 6.66894 27.8126 2.61391"
          stroke={theme.color[borderCategory]}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

interface CalendarDetailsImageProps {
  image: CalendarDetailsProps["image"];
  borderCategory: CalendarDetailsProps["borderCategory"];
}
