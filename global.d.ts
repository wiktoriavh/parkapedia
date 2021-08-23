declare global {
  namespace Jss {
    export type Theme = {
      palette: {
        black: HexColor;
        blue: HexColor;
        creme: HexColor;
        brown: HexColor;
        purple: HexColor;
        green: HexColor;
        magenta: HexColor;
        white: HexColor;
        yellow: HexColor;
        biomes: {
          savannah: HexColor;
          prairie: HexColor;
          desert: HexColor;
          taiga: HexColor;
          forest: HexColor;
          rainforest: HexColor;
          swamp: HexColor;
          alpine: HexColor;
          tundra: HexColor;
        };
        dinos: {
          black: HexColor;
          green: HexColor;
          yellow: HexColor;
          red: HexColor;
          purple: HexColor;
          orange: HexColor;
          blue: HexColor;
          pink: HexColor;
        };
      };
      spacing: {
        normal: number;
      };
    };
  }
}

type HexColor = string;

export {};
