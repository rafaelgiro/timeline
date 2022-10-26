import { LoLIcon, LoRIcon, ValorantIcon, WRIcon } from "./GameIcons";
import { SelectorContainer } from "./styles";

export const GameSelector = () => {
  const currentGame = process.env.GAME_NAME;

  return (
    <SelectorContainer>
      <div>
        <a href="https://lol.5pots.com">
          <LoLIcon isActive={currentGame === "lol"} />
        </a>
      </div>
      {/* <div>
        <a href="https://wr.5pots.com">
          <WRIcon isActive={currentGame === "wr"} />
        </a>
      </div> */}
      <div>
        <a href="https://val.5pots.com">
          <ValorantIcon isActive={currentGame === "val"} />
        </a>
      </div>
      <div>
        <a href="https://lor.5pots.com">
          <LoRIcon isActive={currentGame === "lor"} />
        </a>
      </div>
    </SelectorContainer>
  );
};
