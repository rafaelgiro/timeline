import Head from "next/head";

import { CardsWrapper } from "@5pots/timeline/modules/Cards/CardsWrapper";
import { Sidebar } from "@5pots/timeline/modules/Sidebar";
import { Background, CalendarWrapper } from "@5pots/timeline/modules/Timeline";
import { Wrapper } from "@5pots/timeline/modules/Wrapper/Wrapper";
import { ThemeProvider } from "@5pots/timeline/contexts/Theme";

import { color } from "../utils/color";
import { data } from "../data";

export default function Web() {
  return (
    <ThemeProvider color={color}>
      <Wrapper>
        <Head>
          <title>5Pots - Valorant</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Calendário com as novidades de Valorant"
          />
          <meta name="theme-color" content="#080815" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta property="og:image" content="/static/thumb.jpg" />
        </Head>
        <Sidebar />
        <Background />
        <CalendarWrapper data={data} />
        <CardsWrapper data={data} />
      </Wrapper>
    </ThemeProvider>
  );
}
