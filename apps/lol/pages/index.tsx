import Head from "next/head";

import { CardsWrapper } from "../modules/Cards/CardsWrapper";
import { Sidebar } from "../modules/Sidebar";
import { Background, CalendarWrapper } from "../modules/Timeline";
import { Wrapper } from "../modules/Wrapper/Wrapper";
import { ThemeProvider } from "../contexts/Theme";

import { color } from "../utils/color";
import { data } from "../data";

export default function Web() {
  return (
    <ThemeProvider color={color}>
      <Wrapper>
        <Head>
          <title>5Pots - LoL</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Calendário com as novidades de League of Legends"
          />
          <meta name="theme-color" content="#141529" />
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
