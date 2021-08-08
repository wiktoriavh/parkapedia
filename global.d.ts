declare global {
  namespace Jss {
    export interface Theme {
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
      };
      spacing: {
        normal: number;
      };
    }
  }
}

type HexColor = string;

export {};
