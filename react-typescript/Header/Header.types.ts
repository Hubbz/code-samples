import { Theme } from '@x/x'; // Sensitive information hidden.

export interface HeaderProps {
  menuDrawerExpanded?: boolean;
  searchDrawerExpanded?: boolean;
  className?: string;
}

export interface HeaderThemeProps {
  theme?: typeof Theme;
}
