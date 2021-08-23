/**
 * @Source https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 */

export function shadeColor(color: string, percent: number): string {
  let R: string | number = Number.parseInt(color.slice(1, 3), 16);
  let G: string | number = Number.parseInt(color.slice(3, 5), 16);
  let B: string | number = Number.parseInt(color.slice(5, 7), 16);

  R = (R * (100 + percent)) / 100;
  G = (G * (100 + percent)) / 100;
  B = (B * (100 + percent)) / 100;

  R = (R < 255 ? R : 255).toString(16);
  G = (G < 255 ? G : 255).toString(16);
  B = (B < 255 ? B : 255).toString(16);

  let RR = R.length == 1 ? `0${  R}` : R;
  let GG = G.length == 1 ? `0${  G}` : G;
  let BB = B.length == 1 ? `0${  B}` : B;

  RR = RR.length > 2 ? RR.slice(0, 2) : RR;
  GG = GG.length > 2 ? GG.slice(0, 2) : GG;
  BB = BB.length > 2 ? BB.slice(0, 2) : BB;

  return `#${  RR  }${GG  }${BB}`;
}
