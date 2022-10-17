import { CardsWrapper } from "../modules/Cards/CardsWrapper";
import { Sidebar } from "../modules/Sidebar";
import { Background, CalendarWrapper } from "../modules/Timeline";
import { Wrapper } from "../modules/Wrapper/Wrapper";
import { ThemeProvider } from "../contexts/Theme";

import { data } from "../data";

export default function Web() {
  return (
    <ThemeProvider>
      <Wrapper>
        <Sidebar />
        <Background />
        <CalendarWrapper data={data} />
        <CardsWrapper data={data} />
      </Wrapper>
    </ThemeProvider>
  );
}
