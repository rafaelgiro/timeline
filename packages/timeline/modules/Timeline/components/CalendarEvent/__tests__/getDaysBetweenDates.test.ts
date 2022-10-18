import { describe, it } from "vitest";
import { getDaysBetweenDates } from "../helpers";

describe("getDaysBetweenDates", () => {
  it("should return 0 if the dates are the same", () => {
    const startDate = new Date("2021-01-01T00:00:00.000");
    const endDate = new Date("2021-01-01T00:00:00.000");
    const result = getDaysBetweenDates(startDate, endDate);
    expect(result).toBe(0);
  });

  it("should return 1 if the dates are one day apart", () => {
    const startDate = new Date("2021-01-01T00:00:00.000");
    const endDate = new Date("2021-01-02T00:00:00.000");
    const result = getDaysBetweenDates(startDate, endDate);
    expect(result).toBe(1);
  });

  it("should return 124 if the dates are 124 days apart", () => {
    const startDate = new Date("2021-01-01T00:00:00.000");
    const endDate = new Date("2021-05-05T00:00:00.000");
    const result = getDaysBetweenDates(startDate, endDate);
    expect(result).toBe(124);
  });

  it("should return a positive number if the end date is after the start date", () => {
    const startDate = new Date("2021-05-05T00:00:00.000");
    const endDate = new Date("2021-01-01T00:00:00.000");
    const result = getDaysBetweenDates(startDate, endDate);
    expect(result).toBe(124);
  });
});
