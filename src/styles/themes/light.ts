import colors from '../colors';

export const unit = 16;

const theme = {
  title: 'light',

  unit,

  fontSize: {
    xlarge: 32,
    large: 20,
    medium: 16,
    small: 12,
  },

  colors: {
    primary: {
      disabled: colors.purple['100'],
      lighter: colors.purple['300'],
      light: colors.purple['400'],
      main: colors.purple['500'],
      dark: colors.purple['600'],
      darker: colors.purple['700'],
    },
    secundary: {
      disabled: colors.green['100'],
      main: colors.green['500'],
      dark: colors.green['700'],
    },
    warning: colors.red['500'],
    text: {
      light: colors.purple['100'],
      base: colors.purple['200'],
      constrast: colors.white,
    },
    subtext: {
      base: colors.gray['700'],
    },
    title: {
      main: colors.purple['900'],
      base: colors.purple['100'],
    },
    background: colors.gray['300'],
    surface: {
      base: colors.white,
      constrast: colors.gray['100'],
      input: colors.gray['400'],
      placeholder: colors.gray['500'],
      active: colors.gray['450'],
    },
    lines: {
      constrast: colors.gray['200'],
    },
  },

  shapes: {
    borderRadius: unit / 2,
  },
};

export default theme;
