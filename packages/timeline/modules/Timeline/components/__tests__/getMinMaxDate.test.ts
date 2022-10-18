import { describe, it } from "vitest";
import { data as mockData } from "../../../../vitest/mocks";
import { getMinMaxDate } from "../../helpers";

describe("getMinMaxDate", () => {
  it("should return the min and max date of the events", () => {
    const dates = getMinMaxDate(Object.values(mockData));

    expect(dates).toStrictEqual({
      minDate: new Date("2022-09-01T00:00:00.000"),
      maxDate: new Date("2022-09-30T00:00:00.000"),
    });
  });
});
