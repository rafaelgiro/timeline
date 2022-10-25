import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      backgroundPrimary: string;
      backgroundSecondary: string;
      fontPrimary: string;
      border: string;
      highlight: string;
      skins: string;
      changes: string;
      champions: string;
      pbe: string;
      release: string;
      rumor: string;
    };
    screens: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
