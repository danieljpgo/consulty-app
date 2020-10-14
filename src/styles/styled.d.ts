import 'styled-components';

interface Colors {
  primary: {
    disabled: string;
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
  };
  secundary: {
    disabled: string;
    main: string;
    dark: string;
  };
  background: string;
  surface: {
    base: string;
    constrast: string;
    input: string;
    placeholder: string;
    active: string;
  };
  lines: {
    constrast: string;
  };
  warning: string;
  text: {
    light: string;
    base: string;
    constrast: string;
  };
  subtext: {
    base: string;
  };
  title: {
    main: string;
    base: string;
  };
}

interface Shapes {
  borderRadius: number;
}

interface FontSize {
  xlarge: number;
  large: number;
  medium: number;
  small: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    unit: number;
    colors: Colors;
    shapes: Shapes;
    fontSize: FontSize;
  }
}
