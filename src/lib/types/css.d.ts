
type Rounded = `${number}px` | `${number}%` | `calc(${string})` | `${number}rem`;

type Color = { [key: string | number]: string };

type FontWeights = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export { Rounded, Color, FontWeights };