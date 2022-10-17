import { describe, it } from "vitest";
import { render, screen } from "~/test-utils";
import { Champions } from "../Champions";

const champions: Champion[] = [
  { name: "Ivern", championId: "Ivern" },
  { name: "Cho'Gath", championId: "ChoGath" },
  { name: "Aurelion Sol", championId: "AurelionSol" },
];
const championsNames = champions.map((champ) => champ.name);

describe("<Champions />", () => {
  championsNames.forEach((name) =>
    it(`renders an portrait for ${name}`, () => {
      render(<Champions champions={champions} />);

      const championPortrait = screen.getByAltText(name);
      expect(championPortrait).toBeVisible();
    })
  );

  it("renders a maximum of 4 portraits", () => {
    const multipleChampions = [
      ...champions,
      { name: "Kai'Sa", championId: "KaiSa" },
      { name: "Vel'Koz", championId: "VelKoz" },
      { name: "Sion", championId: "Sion" },
    ];

    render(<Champions champions={multipleChampions} />);

    const championPortrait = screen.getAllByTestId("champion-portrait");
    expect(championPortrait).toHaveLength(4);
  });

  it("displays a number for excess champions", () => {
    const multipleChampions = [
      ...champions,
      { name: "Kai'Sa", championId: "KaiSa" },
      { name: "Vel'Koz", championId: "VelKoz" },
      { name: "Sion", championId: "Sion" },
    ];

    render(<Champions champions={multipleChampions} />);

    const plusX = screen.getByText("+2");
    expect(plusX).toBeVisible();
  });

  it("renders all 6 champions when passing prop `limit`", () => {
    const multipleChampions = [
      ...champions,
      { name: "Kai'Sa", championId: "KaiSa" },
      { name: "Vel'Koz", championId: "VelKoz" },
      { name: "Sion", championId: "Sion" },
    ];

    render(<Champions champions={multipleChampions} limit={6} />);

    const championPortrait = screen.getAllByTestId("champion-portrait");
    expect(championPortrait).toHaveLength(6);
  });
});
