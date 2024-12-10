export type ThemeType = 'cyberpunk' | 'matrix' | 'quantum';

export interface ThemeColors {
  primary: string;
  accent: string;
  text: string;
  subText: string;
  background: string;
  surface: string;
  border: string;
  focus: string;
}

export interface Theme {
  id: ThemeType;
  name: string;
  colors: ThemeColors;
  contrast: {
    high: boolean;
    textOnPrimary: number;
    textOnBackground: number;
    textOnSurface: number;
  };
}