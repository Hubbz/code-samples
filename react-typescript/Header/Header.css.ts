import type { HeaderThemeProps } from './Header.types';

const styles = (props: HeaderThemeProps) => {
  const { theme } = props;

  if (!theme) return;

  return {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.tokens.colors.paletteBackgroundMain,
    boxShadow: 'none',

    '& .comp-header-toolbar': {
      display: 'block',
    },

    // Place the top bar higher than the main bar so the dropdowns look right.
    '& .comp-header-toolbar__top': {
      zIndex: 2,
      display: 'none',

      [theme.breakpoints.up('lg')]: {
        display: 'block',
      },
    },

    '& .comp-header-toolbar__main': {
      zIndex: 1,
    },

    // Logo.
    '& .header-logo': {
      width: '100%',
      maxWidth: '165px',
      marginRight: theme.tokens.spacing.sm,

      [theme.breakpoints.up('sm')]: {
        maxWidth: '245px',
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '315px',
      },
    },

    // Main header area on mobile.
    '& .comp-header-toolbar__main-mobile': {
      display: 'none',
      minHeight: theme.tokens.spacing.xl,
      alignItems: 'center',

      [theme.breakpoints.down('lg')]: {
        display: 'flex',
      },

      '& .MuiButton-root.comp-button': {
        minWidth: 'auto',
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      },

      '& .menu-label': {
        marginRight: theme.tokens.spacing.xxs,
      },
    },

    // Main header area on desktop.
    '& .comp-header-toolbar__main-desktop': {
      paddingTop: theme.tokens.spacing.xs,
      paddingBottom: theme.tokens.spacing.xs,
      display: 'none',

      [theme.breakpoints.up('lg')]: {
        display: 'block',
      },

      '& .comp-header-toolbar__main-desktop__right': {
        '& .comp-header-toolbar__searchbar, & .comp-header-toolbar__buttons': {
          display: 'inline-flex',
          width: 'auto',
          margin: 0,
          verticalAlign: 'middle',
        },

        '& .comp-header-toolbar__buttons': {
          marginLeft: theme.tokens.spacing.xs,

          '& .comp-button': {
            margin: `0 0 0 ${theme.tokens.spacing.xxxs}`,
            padding: theme.tokens.spacing.xxxs,
          },

          '& .comp-icon': {
            marginRight: theme.tokens.spacing.xxxs,
          },
        },
      },
    },

    // Primary menu on desktop.
    '& .comp-header-toolbar__bottom': {
      // Hardcoded paletteDividerLight color to use with opacity.
      borderBottom: `1px solid rgba(229, 229, 229, 0.2)`,

      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
  };
};

export default styles;
