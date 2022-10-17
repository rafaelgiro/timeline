import { describe, it } from "vitest";
import { getDatesBetween } from "../helpers";

describe("getDatesBetween", () => {
  it("returns one date", () => {
    const from = new Date("2022-09-22T00:00:00.000");
    const to = new Date("2022-09-22T00:00:00.000");
    const result = getDatesBetween(from, to);

    expect(result).toEqual([from]);
  });

  it("returns two dates", () => {
    const from = new Date("2022-09-22T00:00:00.000");
    const to = new Date("2022-09-23T00:00:00.000");
    const result = getDatesBetween(from, to);

    expect(result).toEqual([from, to]);
  });

  it("returns ten dates", () => {
    const from = new Date("2022-09-12T00:00:00.000");
    const to = new Date("2022-09-22T00:00:00.000");
    const result = getDatesBetween(from, to);

    expect(result).toEqual([
      from,
      new Date("2022-09-13T00:00:00.000"),
      new Date("2022-09-14T00:00:00.000"),
      new Date("2022-09-15T00:00:00.000"),
      new Date("2022-09-16T00:00:00.000"),
      new Date("2022-09-17T00:00:00.000"),
      new Date("2022-09-18T00:00:00.000"),
      new Date("2022-09-19T00:00:00.000"),
      new Date("2022-09-20T00:00:00.000"),
      new Date("2022-09-21T00:00:00.000"),
      to,
    ]);
  });

  it("returns multiple months", () => {
    const from = new Date("2022-08-27T00:00:00.000");
    const to = new Date("2022-09-05T00:00:00.000");

    const result = getDatesBetween(from, to);

    expect(result).toEqual([
      from,
      new Date("2022-08-28T00:00:00.000"),
      new Date("2022-08-29T00:00:00.000"),
      new Date("2022-08-30T00:00:00.000"),
      new Date("2022-08-31T00:00:00.000"),
      new Date("2022-09-01T00:00:00.000"),
      new Date("2022-09-02T00:00:00.000"),
      new Date("2022-09-03T00:00:00.000"),
      new Date("2022-09-04T00:00:00.000"),
      to,
    ]);
  });

  it("returns different years", () => {
    const from = new Date("2022-12-27T00:00:00.000");
    const to = new Date("2023-01-05T00:00:00.000");

    const result = getDatesBetween(from, to);

    expect(result).toEqual([
      from,
      new Date("2022-12-28T00:00:00.000"),
      new Date("2022-12-29T00:00:00.000"),
      new Date("2022-12-30T00:00:00.000"),
      new Date("2022-12-31T00:00:00.000"),
      new Date("2023-01-01T00:00:00.000"),
      new Date("2023-01-02T00:00:00.000"),
      new Date("2023-01-03T00:00:00.000"),
      new Date("2023-01-04T00:00:00.000"),
      to,
    ]);
  });
});
