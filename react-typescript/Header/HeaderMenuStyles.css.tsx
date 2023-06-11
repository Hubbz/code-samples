import type { HeaderThemeProps } from './Header.types';

export const primaryMenuHorizontal = (props: HeaderThemeProps) => {
  const { theme } = props;

  if (!theme) return;

  return {
    '& .comp-menu-list .comp-menu-list-item': {
      paddingLeft: theme.tokens.spacing.xxxs,
      paddingRight: theme.tokens.spacing.xxxs,
      marginLeft: theme.tokens.spacing.xxxs,

      '& .MuiIcon-root': {
        color: theme.palette.text.disabled,
      },

      '& .MuiIconButton-root': {
        height: '30px',
        padding: `${theme.tokens.spacing.xxxs} ${theme.tokens.spacing.xs}`,
      },

      '& .MuiTypography-root': {
        // Change flex-grow so submenu toggle arrow is right next to menu item text.
        flexGrow: 0,
        minHeight: '30px',
        color: theme.palette.text.light,
        fontSize: theme.tokens.fontSizes.body2,

        // Active styles.
        // Uses !important to conrol the color globally here.
        '&.active, &.active-trail': {
          fontWeight: theme.tokens.fontWeights.bold,
          color: `${theme.palette.text.light} !important`,
        },

        // Hover styles.
        // Uses !important to control the color globally here.
        '&.MuiLink-root': {
          cursor: 'pointer',
          borderBottom: `${theme.tokens.borderWidths.thin} solid transparent`,
          transition: `border ${theme.tokens.durations.short} ${theme.tokens.easings.easeInOut}`,

          '&:hover, &:focus': {
            textDecoration: 'none',
            color: `${theme.palette.text.light} !important`,
            borderBottom: `${theme.tokens.borderWidths.thin} solid ${theme.tokens.colors.paletteBorderLight}`,
          },
        },

        // Menu title.
        '&.upper-menu-title': {
          fontStyle: 'italic',
          color: theme.palette.text.disabled,
        },
      },
    },

    // 1st Level.
    '& > .comp-menu-list > .comp-menu-list-item': {
      marginBottom: 0,
      paddingBottom: 0,

      '&:last-of-type': {
        paddingRight: 0,
        marginRight: 0,
      },

      '& > .MuiTypography-root': {
        paddingBottom: theme.tokens.spacing.xxxs,
      },

      '& > .MuiIconButton-root': {
        top: '-4px',
      },

      // 2nd Level.
      '& > .comp-menu__submenu': {
        background: theme.tokens.colors.paletteBackgroundDark,
        borderRadius: 'unset',
        padding: `${theme.tokens.spacing.xxxs} ${theme.tokens.spacing.xs} ${theme.tokens.spacing.xs}`,
        marginTop: theme.tokens.spacing.xxxs,

        // Dropdown Top Arrow.
        '&::before': {
          borderBottomColor: theme.tokens.colors.paletteBackgroundDark,
        },

        // Add an invisible block taking up the same space as the submenu's
        // margin-top so that hovering over the empty space doesn't interupt
        // the submenu visibility.
        '&::after': {
          content: '""',
          position: 'absolute',
          top: `-${theme.tokens.spacing.xxxs}`,
          left: 0,
          height: theme.tokens.spacing.xxxs,
          width: '100%',
        },

        // 2nd Level and beyong.
        '& .MuiTypography-root': {
          marginLeft: '0 !important',
          paddingLeft: '0 !important',
        },

        '& .comp-menu-list-item': {
          margin: '0 !important',
          padding: '0 !important',
        },

        // Remove bullet.
        '& >.comp-menu-list > .comp-menu-list-item .comp-menu__submenu .comp-menu-list > .comp-menu-list-item > .MuiTypography-root::before':
          {
            content: '""',
          },
      },
    },
  };
};

export const primaryMenuVertical = (props: HeaderThemeProps) => {
  const { theme } = props;

  if (!theme) return;

  return {
    '& .comp-menu-list .comp-menu-list-item': {
      paddingTop: '0 !important',
      paddingBottom: '0 !important',

      '& .MuiIcon-root': {
        color: theme.palette.text.disabled,
      },

      '& .MuiTypography-root': {
        // Change flex-grow so submenu toggle arrow is right next to menu item text.
        flexGrow: 0,
        marginLeft: 0,
        paddingTop: theme.tokens.spacing.xxs,
        paddingBottom: theme.tokens.spacing.xxs,
        color: theme.palette.text.light,

        // Active styles.
        // Uses !important to conrol the color globally here.
        '&.active, &.active-trail': {
          borderLeft: `${theme.tokens.borderWidths.thin} solid ${theme.tokens.colors.paletteBorderLight}`,
          paddingLeft: theme.tokens.spacing.xxs,
          fontWeight: theme.tokens.fontWeights.bold,
          color: `${theme.palette.text.light} !important`,
        },

        // Hover styles.
        // Uses !important to control the color globally here.
        '&.MuiLink-root': {
          cursor: 'pointer',

          '&:hover, &:focus': {
            color: `${theme.palette.text.light} !important`,
          },
        },
      },

      '& .comp-logout-button': {
        padding: `0px`,
      },
    },

    // 2nd Level and beyond.
    '& > .comp-menu-list > .comp-menu-list-item': {
      borderBottom: `${theme.tokens.borderWidths.fine} solid ${theme.tokens.colors.palettePrimaryLight}`,

      '& .comp-menu__submenu': {
        paddingLeft: theme.tokens.spacing.sm,

        '& .MuiTypography-root': {
          paddingTop: theme.tokens.spacing.xxxs,
          paddingBottom: theme.tokens.spacing.xxxs,
          paddingLeft: '0px !important',
          fontSize: theme.tokens.fontSizes.body2,

          // Remove bullet.
          '&::before': {
            display: 'none !important',
          },
        },
      },
    },
  };
};

export const topBarMenu = (props: HeaderThemeProps) => {
  const { theme } = props;

  if (!theme) return;

  return {
    '& .comp-menu-list .comp-menu-list-item': {
      paddingLeft: theme.tokens.spacing.xxxs,
      paddingRight: theme.tokens.spacing.xxxs,

      '& .MuiIcon-root': {
        color: theme.palette.text.primary,
      },

      '& .MuiTypography-root': {
        // Change flex-grow so submenu toggle arrow is right next to menu item text.
        flexGrow: 0,
        color: theme.palette.text.primary,
        fontSize: theme.tokens.fontSizes.buttonSmall,

        // Active styles.
        // Uses !important to conrol the color globally here.
        '&.active, &.active-trail': {
          fontWeight: theme.tokens.fontWeights.bold,
          color: `${theme.palette.text.primary} !important`,
        },

        // Hover styles.
        // Uses !important to control the color globally here.
        '&.MuiLink-root': {
          cursor: 'pointer',

          '&:hover, &:focus': {
            textDecoration: 'underline !important',
          },
        },
      },

      '& .comp-logout-button': {
        margin: `0px ${theme.tokens.spacing.xxxs}`,
        padding: `${theme.tokens.spacing.xxxs} 0px`,

        '&:hover, &:focus': {
          textDecoration: 'underline',
        },
      },
    },

    // 1st Level.
    '& > .comp-menu-list > .comp-menu-list-item': {
      marginRight: theme.tokens.spacing.xxxs,
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',

      '&::after': {
        position: 'absolute',
        top: '0.25rem',
        right: `-${theme.tokens.spacing.xxxs}`,
        content: '"|"',
        color: theme.palette.secondary.light,
      },

      '&:first-of-type': {
        paddingLeft: 0,
      },

      '&:last-of-type': {
        paddingRight: 0,
        marginRight: 0,

        '&::after': {
          content: '""',
        },
      },

      '& > .MuiTypography-root': {
        minHeight: '32px',
        lineHeight: '32px',
      },

      '& > .MuiIconButton-root': {
        height: '30px',
      },
    },

    // 2nd Level.
    '& > .comp-menu-list > .comp-menu-list-item > .comp-menu__submenu': {
      borderRadius: 'unset',

      // 3rd Level and beyond.
      '& .comp-menu__submenu': {
        paddingLeft: theme.tokens.spacing.xxxs,
      },
    },

    // Remove bullet from 3rd level items and beyond.
    '& >.comp-menu-list > .comp-menu-list-item > .comp-menu__submenu > .comp-menu-list > .comp-menu-list-item .comp-menu__submenu .comp-menu-list > .comp-menu-list-item > .MuiTypography-root::before':
      {
        content: '""',
      },
  };
};
