export const indicatorPaths = [
  "M2 2C29.9239 5.89668 59.3741 13.7491 128 6.0738M5.20919 7.54982C31.9786 5.54244 57.5151 5.18819 126.024 10",
  "M4.14182 3.76107C31.0675 1.17203 55.3822 0.588226 128 8M2 4.1672C26.3351 6.55318 54.0971 5.03021 127.164 3.10112",
];

/**
 * Function that takes svg paths from figma to create tab's
 * active indicator.
 * @returns a svg path drawing the tab's active indicator
 */
export function getTabIndicator() {
  return indicatorPaths[Math.floor(Math.random() * indicatorPaths.length)];
}
